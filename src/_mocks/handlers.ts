import { rest } from "msw";
import { ctaList } from "./dummy";

export const handlers = () => [
  rest.get("/api/cta", getCtaList),
  rest.post("/api/cta", createCtaLink),
  rest.put("/api/cta", updateCtaLink),
];

/**
 response type : { page: number; detail: { buttonName: string; url: string; } | null; }
 */
const getCtaList: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: "success",
      data: ctaList,
    })
  );
};

/**
  request type : { page: number; buttonName: string; url: string; }
  response type : { message: string; }
 */
const createCtaLink: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  if (req.method !== "POST") {
    return res(ctx.status(405));
  }

  const { page, buttonName, url } = req.body as any;

  if (!page || !buttonName || !url) {
    return res(ctx.status(400));
  }

  ctaList[page - 1].detail = {
    buttonName,
    url,
  };

  return res(
    ctx.status(200),
    ctx.json({
      message: "success",
    })
  );
};

/**
  request type : { page: number; buttonName: string; url: string; }
  response type : { message: string; }
 */
const updateCtaLink: Parameters<typeof rest.put>[1] = (req, res, ctx) => {
  if (req.method !== "PUT") {
    return res(ctx.status(405));
  }

  const { page, buttonName, url } = req.body as any;

  if (!page || !buttonName || !url) {
    return res(ctx.status(400));
  }

  if (!ctaList[page - 1].detail) {
    return res(ctx.status(404));
  }

  if (
    ctaList[page - 1].detail?.buttonName === buttonName &&
    ctaList[page - 1].detail?.url === url
  ) {
    return res(ctx.status(400));
  }

  ctaList[page - 1].detail = {
    buttonName,
    url,
  };

  return res(
    ctx.status(200),
    ctx.json({
      message: "success",
    })
  );
};
