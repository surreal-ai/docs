---
title: Rate limits
---

# Rate limits

Surreal Engine rely on rate limits to ensure best experience for developers.

For now, Surreal Engine would limit each developers' API call by 30 requests/per minute.

## Response to rate limits

For every API call, Surreal Engine response with rate limit headers:

- `X-Ratelimit-Total`: Total limit count of developer.
- `X-Ratelimit-Left`: The number of left limits.
- `X-Ratelimit-Reset`: The timestamp when rate limit is reset.

If you exceed rate limits, Surreal Engine response following error:

- HTTP Staus: `429 Too Many Request`
- HTTP Headers:
  - `X-Ratelimit-Reset`: The timestamp when rate limit is reset
- Body:
    ```json
    {
        "code": 1009,
        "message: "Too Many Request",
        "data": null
    }
    ```
