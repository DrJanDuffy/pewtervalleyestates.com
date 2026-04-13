import * as cookie from "cookie"

/** @type {import('@sveltejs/kit').Reroute} */
export function reroute() {
  // Optional URL rewriting before routing; return a pathname string to rewrite, or nothing.
}

/** @type {import('@sveltejs/kit').Transport} */
export const transport = {}

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "")
  event.locals.userid = cookies.userid || crypto.randomUUID()

  const response = await resolve(event)

  if (!cookies.userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set(
      "set-cookie",
      cookie.serialize("userid", event.locals.userid, {
        path: "/",
        httpOnly: true,
      })
    )
  }

  return response
}

/** @type {import('@sveltejs/kit').HandleFetch} */
export const handleFetch = async ({ request, fetch }) => {
  return fetch(request)
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ error }) => {
  console.error("An error occurred on the server:", error)
  return {
    message: "An unexpected error occurred",
  }
}
