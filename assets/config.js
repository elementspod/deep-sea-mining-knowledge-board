/* ============================================================================
   config.js: the only file most maintainers ever need to open.
   ========================================================================== */
window.DSM_CONFIG = {

  /* WHERE THE DATA COMES FROM
     Leave all three blank and the page reads the CSV files in the data/ folder.
     That is the default, and it is always safe.

     To read a live Google Sheet instead, publish each tab and paste its link:
       File > Share > Publish to the web > pick the tab > "Comma-separated
       values (.csv)" > Publish. Use THAT link. The ordinary download link is
       blocked by browsers.

     Paste elements and connections together or not at all. The anchors tab is
     optional; if it is blank the copy in data/anchors.csv is used.

     If the sheet cannot be reached, the page falls back to the data/ folder and
     says so at the bottom of the screen, so a sheet outage never blanks the map. */
  sheetUrls: {
    elements:    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJOkMa-_EqC3YLkUkIpzXitPhywCQhZsDhZdle8Sq4RdfJH6kJsMcjzZmn_fivuYnAVB-bJOTqWEUn/pub?gid=0&single=true&output=csv",
    connections: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJOkMa-_EqC3YLkUkIpzXitPhywCQhZsDhZdle8Sq4RdfJH6kJsMcjzZmn_fivuYnAVB-bJOTqWEUn/pub?gid=1713692417&single=true&output=csv",
    anchors:     ""
  },

  /* The copy stored with the page. Also the fallback. */
  localData: {
    elements:    "data/elements.csv",
    connections: "data/connections.csv",
    anchors:     "data/anchors.csv"
  },

  /* Each visitor's dragged positions and control settings are kept in their own
     browser under this name. Change the number (v1 -> v2) to reset everyone's
     saved layouts, for example after a big restructure of the data. */
  storageKey: "dsm-board-session-v1"
};
