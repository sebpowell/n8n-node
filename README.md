## Setup

1.	Install dependencies `pnpm i`
2.	Run locally `pnpm dev`

A demo is available [here](https://n8n-node-ltoj.vercel.app/).
Designs are available on [Figma](https://www.figma.com/design/gQJ5yd8nrltukDNg1CEKbg/n8n?node-id=0-1&t=tvU2CGxhp9iYQWKR-1)

Please note that due to time constraints, I didn't design every possible state and moved into code once I had a clear enough direction. There are also a few small discrepancies between design and implementation for the same reason.

The project runs on Next.js, using Tailwind and Radix UI components, with Motion for animations where relevant.

I used Tailwind 3, as Tailwind 4 doesn’t yet play nicely with theming. I wanted to support both light and dark modes, so I used tw-colors to manage theme tokens. More details on my rationale can be found [here](https://www.sebastienpowell.com/blog/theming-with-tailwind).

## Design Rationale

My first impression was that the node logos were too prominent, and the information hierarchy could be rebalanced, making the node title and logo roughly equal in emphasis. 

The reasoning here is that users may have multiple nodes from the same app, so the title becomes the key differentiator and should therefore be more visually dominant.

### Actions

In the current version, nodes have 'Play', 'Pause' (which actually disables the node), and Delete actions.
I rethought this slightly:

- Play: made more prominent, with a small transition animation to draw attention.
- Pause/Disable: converted into a toggle, which provides a clearer, more visual indication of the node's status. The logo also greys out when disabled.

### Statuses

I implemented several example states: error, success, neutral, pending, and disabled (there may be others I missed). You can force these via the dropdown in the top-left corner.

When you click the 'Play' button, it will simulate activity by showing 'pending' briefly, then randomly resolving to either 'success' or 'error.'

In the current n8n version, the status badge isn't particularly prominent, so I designed a clearer treatment with an animated gradient border effect. Please note that I did not have time to implement the tooltip.

### Theming

You can toggle between light and dark themes using the switch in the top-right corner.

### Description

Each node can contain a lot of configuration data, which can quickly become overwhelming. My thought was to include an AI-generated summary of what the node does giving users a quick, human-readable description at a glance.

In the prototype, I used a `Markdown` string so that parameters could be formatted as inline code for readability.

### Context menu

The context menu currently works via right-click. I initially wanted it to open via the options button, but Radix doesn’t yet support this pattern cleanly — see this discussion￼[here](https://github.com/radix-ui/primitives/discussions/2726).

The recommended workaround is to use a dropdown menu instead, so I left this for now due to time constraints.

## Improvements & next Steps	
- Some refinements could be made to the Tailwind setup and component structure
- Visually, the 'Play' button isn’t quite there yet – I'd like to explore alternative treatments
- A text shimmer effect could enhance the loading state
- Given more time, I'd also have liked to explore drag-and-drop behavior and add smooth motion there