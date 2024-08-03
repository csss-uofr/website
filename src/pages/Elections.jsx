import React from "react";
import EventCard from "../components/EC";

// TODO:
// - add previous elections results in election-results.md
// - parse and display the data in Elections.jsx

const upcomingElections = [
    {
        id: 1,
        title: "Elections 2024",
        href: "#",
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Marketing", href: "#" },
        author: {
          name: "Michael Foster",
          role: "Co-Founder / CTO",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
  ];
  const pastElections = [
    {
      id: 1,
      title: "Elections 2023",
      href: "#",
      description: "Description of elections 2023",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
   
    
  ];

const Elections = () => {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 pb-4 border-b border-gray-200">Upcoming Elections</h1>
        {upcomingElections ? (
            <>
            <div className="py-14 mb-4">
            <p className="text-center text-gray-500 tracking-wide text-sm">There are no upcoming elections. Stay tuned for information about our upcoming elections. Get involved
          and make a difference in your CS community!</p>
            </div>
            </>
            ) : (
                <EventCard key={upcomingElections.id} event={upcomingElections} />
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 pb-4 border-b border-gray-200">Past Elections</h1>

        {pastElections.length < 0 ? (
              <>
              <div className="py-6 mb-4">
              <p className="text-center text-blue-500">There are no past elections.</p>
              </div>
              </>
        ) : (
          <EventCard key={pastElections.id} event={pastElections} />
        )}
      </div>
    </div>
  );
};

export default Elections;
