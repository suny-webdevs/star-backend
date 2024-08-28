const AboutPage = () => {
  return (
    <div class="relative h-screen w-full bg-black">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div class="absolute left-24 top-0 h-full w-[90%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

      <div class="relative z-10 p-8 text-white">
        <h1 class="text-4xl font-bold">Welcome to My Website</h1>
        <p class="mt-4 text-lg">
          This is a sample content section with some descriptive text.
        </p>
        <button class="mt-8 rounded-md bg-blue-600 px-6 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
