import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ja5nroqr',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN || '', // You'll need to add a token for writing
  apiVersion: '2023-01-01',
});

// Your current portfolio data
const portfolioData = {
  hero: {
    _type: 'hero',
    mainTitle: "Hey, I'm Velu — I build useful web tools and playful micro‑apps.",
    subtitle: "Everything I ship is lightweight, mobile-friendly, and built to be useful. Explore small apps and projects you can try right now.",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    imageOverlayText: "drvelu.com — dev experiments"
  },
  
  projects: [
    {
      _type: 'project',
      title: 'Word Puzzle — Speed Challenge',
      description: 'Guess 10 words in 60 seconds. Fast, mobile-friendly, addictive.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
      order: 1
    },
    {
      _type: 'project',
      title: 'Snake — Classic Browser',
      description: 'Retro snake gameplay, responsive and smooth on mobile.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
      order: 2
    },
    {
      _type: 'project',
      title: 'YouTube SEO Autotool',
      description: 'Generate optimized titles & tags in seconds.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
      order: 3
    }
  ],
  
  about: {
    _type: 'about',
    description: "I graduated in Biology and now design small, useful web experiences using Python + JavaScript. I teach, build, and iterate quickly — everything here is made to be deployed fast and improved often.",
    skills: ['Python', 'Django basics', 'HTML/CSS', 'JavaScript'],
    interests: ['Data storytelling', 'game microapps', 'automation'],
    location: 'Santa Rosa, Laguna'
  },
  
  contact: {
    _type: 'contact',
    email: 'velu2k03@gmail.com',
    linkedin: 'https://www.linkedin.com/in/velu-2k03',
    supportLink: 'https://ko-fi.com/yourname'
  }
};

async function importData() {
  try {
    console.log('🚀 Starting portfolio data import...\n');

    // Import Hero
    console.log('📝 Creating Hero Section...');
    const hero = await client.create(portfolioData.hero);
    console.log('✅ Hero Section created:', hero._id);

    // Import Projects
    console.log('\n📝 Creating Projects...');
    for (const project of portfolioData.projects) {
      const created = await client.create(project);
      console.log('✅ Project created:', created.title);
    }

    // Import About
    console.log('\n📝 Creating About Section...');
    const about = await client.create(portfolioData.about);
    console.log('✅ About Section created:', about._id);

    // Import Contact
    console.log('\n📝 Creating Contact Information...');
    const contact = await client.create(portfolioData.contact);
    console.log('✅ Contact Information created:', contact._id);

    console.log('\n🎉 All portfolio data imported successfully!');
    console.log('\n👉 Open Sanity Studio at http://localhost:3333 to edit your content');
    
  } catch (error) {
    console.error('❌ Error importing data:', error.message);
    
    if (error.message.includes('token')) {
      console.log('\n⚠️  You need to create a token first:');
      console.log('1. Go to https://www.sanity.io/manage/project/ja5nroqr/api');
      console.log('2. Create a new token with "Editor" permissions');
      console.log('3. Run: $env:SANITY_TOKEN="your-token-here"; node import-portfolio-data.js');
    }
  }
}

importData();
