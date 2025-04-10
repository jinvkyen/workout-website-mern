const About = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-4'>
      <img src='https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg' width={700} height={700} />
      <h1 className='text-3xl py-4 text-center'>🏋️ About WerkIT</h1>
      <p className='text-base'>
        At WerkIT, we're more than just a gym — we're a community built on strength, passion, and results. Founded with
        a vision to redefine fitness, we provide a space where everyone — from beginners to seasoned athletes — can werk
        towards their goals with confidence and purpose.
      </p>
      <br />
      <p className='text-base'>
        Our state-of-the-art facilities, expert trainers, and supportive environment are designed to help you push
        limits, break barriers, and unlock your best self. Whether you're training for performance, health, or just to
        feel good, WerkIT is your go-to fitness destination.
      </p>
      <br />
      <p className='font-bold text-center'>💪 Werk hard. Stay consistent. Transform.</p>
    </section>
  );
};
export default About;
