import { Router } from "express";

import fetch from "node-fetch";
import { sources } from "./summary_sources.js";
import { JSDOM } from "jsdom";
export const apiRouter = Router();

apiRouter.get("/raw-sites", async (req, res) => {
  let rawSites = await Promise.all(
    sources.map(async (source) => {
      let response = await fetch(source.url, {
        headers: {
          "Upgrade-Insecure-Requests": 1,
          "Sec-GPC": 1,
        },
      });
      console.log(
        `Requesting resource from ${source.url} returns with status: ${response.status}`
      );
      return await response.text();
    })
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(rawSites));
});

apiRouter.get("/summaries", async (req, res) => {
  try {
    let rawSites = await Promise.all(
      sources.map(async (source) => {
        try {
          let response = await fetch(source.url, {
            headers: {
              "Upgrade-Insecure-Requests": 1,
              "Sec-GPC": 1,
            },
          });
          console.log(
            `Requesting resource from ${source.url} returns with status: ${response.status}`
          );
          return await response.text();
        } catch (error) {
          console.log(error);
        }
      })
    );

    let sitesSummaries = rawSites.map((rawSite, index) => {
      let query = sources[index].contentRoles.find(
        (contentRole) => contentRole.name === "summary"
      ).domSelectorQuery;
      let dom = new JSDOM(rawSite);
      let siteSummaries = [];
      dom.window.document.querySelectorAll(query).forEach(function (summaryEl) {
        this.push(summaryEl.textContent.trim());
      }, siteSummaries);

      console.log(siteSummaries);
      return siteSummaries;
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(sitesSummaries));
  } catch (error) {
    console.log("error:", error);
  }
});
