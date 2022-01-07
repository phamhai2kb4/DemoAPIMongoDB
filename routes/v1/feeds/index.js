const router = require("koa-router")();

const {
  createFeed,
  getFeeds,
  getFeedById,
  deleteFeed,
  updateFeed,
} = require("../../../api/feeds.api");

router.get("/", async (ctx) => {
  ctx.response.status = 200;
  ctx.body = await getFeeds();
});

router.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await getFeedById(id);
  ctx.response.status = 200;
});

router.post("/", async (ctx) => {
  let feed = ctx.request.body;
  feed = await createFeed(feed);
  ctx.response.status = 200;
  ctx.body = feed;
});

router.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await deleteFeed(id);
  ctx.response.status = 200;
});

router.put("/:id", async (ctx) => {
  const id = ctx.params.id;

  let feed = ctx.request.body;
  feed = await updateFeed(id, feed);
  ctx.response.status = 200;
  ctx.body = feed;
});

module.exports = router.routes();
