export const process = [
  {
    index: "01",
    phase: "Discover",
    duration: "Week 1",
    description:
      "I sit with the people who'll use the system daily, not just the person paying the invoice. Most requirements documents miss the workaround someone invented three years ago that the whole warehouse now depends on — I go looking for those.",
  },
  {
    index: "02",
    phase: "Design",
    duration: "Weeks 2–3",
    description:
      "Screens, data models, and edge cases are worked out before a line of production code is written. You approve the shape of the system while it's still cheap to change.",
  },
  {
    index: "03",
    phase: "Build",
    duration: "Weeks 4–10",
    description:
      "Development happens in short, visible cycles. You see working software every week, not a single reveal at the end — so course corrections are small, early, and inexpensive.",
  },
  {
    index: "04",
    phase: "Deploy",
    duration: "Week 11",
    description:
      "Migration, staff training, and a staged rollout so the switch from your old process doesn't cost you a week of operations while people relearn how to do their jobs.",
  },
  {
    index: "05",
    phase: "Support",
    duration: "Ongoing",
    description:
      "Software is a relationship, not a delivery. I stay on to fix what breaks, extend what works, and make sure the system still fits the business a year after launch.",
  },
] as const;
