import { useState } from "react";

const blogData = [
  {
    title: "AI is Changing the World",
    emoji: "🤖",
    description: "Discover how artificial intelligence is reshaping industries and daily life.",
  },
  {
    title: "React vs Vue: 2025 Update",
    emoji: "⚛️",
    description: "A fresh comparison of the two popular JavaScript frameworks.",
  },
  {
    title: "SpaceX Launch Success",
    emoji: "🚀",
    description: "SpaceX has launched another rocket successfully into orbit.",
  },
  {
    title: "Healthy Eating Tips",
    emoji: "🥗",
    description: "Simple ways to maintain a balanced and nutritious diet.",
  },
  {
    title: "iPhone 18 Leaks",
    emoji: "📱",
    description: "Latest leaks and rumors about the upcoming iPhone 18.",
  },
  {
    title: "Travel the Alps This Summer",
    emoji: "🏔️",
    description: "Plan your dream adventure to the breathtaking European Alps.",
  },
  {
    title: "Cryptocurrency Trends",
    emoji: "📈",
    description: "The latest on Bitcoin, Ethereum, and the crypto market.",
  },
  {
    title: "10 Books to Read This Year",
    emoji: "📚",
    description: "Our top picks for must-read books in 2025.",
  },
  {
    title: "Remote Work Strategies",
    emoji: "💻",
    description: "Best practices for staying productive while working remotely.",
  },
  {
    title: "Time Management Hacks",
    emoji: "⏰",
    description: "Boost your productivity with these time-saving techniques.",
  },
  {
    title: "Mindfulness Practices",
    emoji: "🧘‍♂️",
    description: "Stay calm and focused with daily mindfulness exercises.",
  },
  {
    title: "2025 Movie Must-Watch List",
    emoji: "🎬",
    description: "Top upcoming films you can't miss this year.",
  },
  {
    title: "Self-Care Routines",
    emoji: "🛁",
    description: "Create a daily self-care plan that works for you.",
  },
  {
    title: "Running for Beginners",
    emoji: "🏃‍♀️",
    description: "Start your running journey with these simple tips.",
  },
  {
    title: "Gardening in Small Spaces",
    emoji: "🌱",
    description: "Grow herbs and veggies even in your apartment balcony.",
  },
  {
    title: "Solar Energy Advancements",
    emoji: "☀️",
    description: "Explore the latest tech driving solar power solutions.",
  },
  {
    title: "Interior Design Trends",
    emoji: "🛋️",
    description: "Check out the most stylish and modern home decor ideas.",
  },
  {
    title: "Building Your Resume",
    emoji: "📝",
    description: "Tips to make your resume stand out in 2025.",
  },

];

function Home() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  ); 

  return (
    <div className="blog-container">
      <h1>📰 Blog News</h1>
      <input
        type="text"
        placeholder="Search blog titles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="blog-list">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <li key={index} className="blog-item">
              <h3>
                {blog.emoji} {blog.title}
              </h3>
              <p>{blog.description}</p>
            </li>
          ))
        ) : (
          <p>No matching blogs found.</p>
        )}
      </ul>
    </div>
  );
}

export default Home;
