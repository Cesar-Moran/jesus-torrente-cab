const LetsTalk = () => {
  return (
    <article className="p-5 md:mb-5 bg-black text-white text-start flex flex-col gap-5  md:max-w-lg md:mx-auto md:rounded-lg ">
      <div>
        <div className=" flex gap-5 items-center">
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-12 h-14 object-cover rounded-full border border-white "
          ></img>
          <p className="flex flex-col">
            <cite>Still have questions?</cite>
            <span>
              Can’t find the answers you’re looking for?{" "}
              <abbr>Let’s talk!</abbr>
            </span>
          </p>
        </div>
      </div>
      <div>
        <button className="px-8 py-2 bg-yellow-500 text-white rounded-full active:scale-75 duration-300">
          Let's talk
        </button>
      </div>
    </article>
  );
};

export default LetsTalk;
