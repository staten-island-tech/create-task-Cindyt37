import "../styles/style.css";

const BrawlStars = require("brawlstars.js");
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjgxZjVjZDgzLTNhOWEtNGU1Zi1hODYyLTdlYTNlMGUxNDBlMyIsImlhdCI6MTY3NTg2ODI5MCwic3ViIjoiZGV2ZWxvcGVyL2ZiYzRiN2VlLTRjMTAtZTc4ZS1jZDhjLWFhM2FhNjgxNDYxNCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTY1LjE1NS4xNzAuMTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.Jz8hgl9Yy-69rv_sd9HXAe73ZfilfRg0eTSFjjUEvpMQ9G0M0xAbJxYx8tMBXuv6vnr2Xq7vPZ8AE56jfpidxQ";
const client = new BrawlStars.Client(token);

(async () => {
  const player = await client.getPlayer("#PLAYERTAG");
  const playerClub = await client.getClub(player.club.tag);
})();