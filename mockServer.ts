import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
const handlers = [
  http.get("https://api.github.com/users/:username", () => {
    return HttpResponse.json({
      login: "billy",
      name: "Billy",
      avatar_url: "https://avatar.com/billy.png",
    });
  }),
];

export const server = setupServer(...handlers);
