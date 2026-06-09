const actions = [
  {
    audience: "For Everyone",
    color: "#e63946",
    items: [
      {
        title: "Share this page",
        description: "The most effective thing you can do right now. The playbook only works in silence.",
      },
      {
        title: "Delete or restrict the worst apps",
        description: "TikTok and Instagram are the most documented for harm. Every uninstall is a vote with your behavior.",
      },
      {
        title: "Talk about it",
        description: "At dinner. At work. In your group chats. Normalize the conversation. This is a public health crisis, not a personal failing.",
      },
    ],
  },
  {
    audience: "For Parents",
    color: "#f4a261",
    items: [
      {
        title: "No phones before 14",
        description:
          "Jonathan Haidt (The Anxious Generation) recommends no smartphones before age 14. Consider a dumb phone or no phone for younger teens.",
      },
      {
        title: "Delay social media until 16",
        description:
          "This is the Surgeon General's recommendation. The earlier the exposure, the greater the documented harm.",
      },
      {
        title: "Make the bedroom a phone-free zone",
        description:
          "57% of teens check their phones at night. Sleep deprivation is one of the primary mechanisms of harm. Charge phones outside the bedroom.",
      },
    ],
  },
  {
    audience: "For Citizens",
    color: "#2a9d8f",
    items: [
      {
        title: "Support the Kids Online Safety Act (KOSA)",
        description:
          "Write to your representative. KOSA would require platforms to default to the safest settings for minors.",
      },
      {
        title: "Support age verification legislation",
        description:
          "Demand that social media companies actually verify the age of their users — not just gesture at it with a checkbox.",
      },
      {
        title: "Follow the advocacy organizations",
        description:
          "Center for Humane Technology. Fairplay. Protect Young Eyes. These are the groups doing the hard legal and political work.",
      },
    ],
  },
];

export default function TakeAction() {
  return (
    <section id="action" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Take Action
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            Outrage Is Not Enough.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            Tobacco lost. Not because people got angry — they were angry for decades. Tobacco lost because people organized, regulated, litigated, and changed norms. That is the path. Here is where to start.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {actions.map((group) => (
            <div key={group.audience}>
              <h3
                className="text-lg font-black font-sans mb-6 pb-3 border-b"
                style={{ color: group.color, borderColor: group.color + "33" }}
              >
                {group.audience}
              </h3>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-[#f0f0f0] font-sans mb-1">{item.title}</h4>
                    <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#666] mb-6 text-lg">Start with one thing. Right now.</p>
          <a
            href="https://www.change.org/search#q=social%20media%20kids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e63946] text-white font-bold px-10 py-4 rounded text-lg hover:bg-[#c1121f] transition-colors duration-200"
          >
            Sign a Petition →
          </a>
        </div>
      </div>
    </section>
  );
}
