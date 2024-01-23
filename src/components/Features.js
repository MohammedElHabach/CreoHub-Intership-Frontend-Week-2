const Features = () => {
  return (
    <section id="features">
      <div className="flex flex-col gap-y-7 container mx-auto px-4  md:flex-row  ">
        {/* Left */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>

          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Right */}
        <div className="container flex flex-col gap-y-6  md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3  md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        01
                    </div>
                    <h3 className="font-bold md:mb-4 md:hidden">Track company-wide progress</h3>
                </div>
            </div>

            <div>
                <h3 className="font-bold hidden md:block">Track company-wide progress</h3>
                <p class="text-darkGrayishBlue">
                    See how your day-to-day tasks fit into the wider vision. Go from
                    tracking progress at the milestone level all the way down to the
                    smallest of details. Never lose sight of the bigger picture
                    again.
                </p>
            </div>

          </div>

          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        02
                    </div>
                    <h3 className="font-bold md:mb-4 md:hidden">Advanced built-in reports</h3>
                </div>
            </div>

            <div>
                <h3 className="font-bold hidden md:block">Advanced built-in reports</h3>
                <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
                </p>
            </div>

          </div>



          {/* List Item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                        03
                    </div>
                    <h3 className="font-bold md:mb-4 md:hidden">Everything you need in one place</h3>
                </div>
            </div>

            <div>
                <h3 className="font-bold hidden md:block">Everything you need in one place</h3>
                <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
                </p>
            </div>

          </div>

          
        </div>
        
      </div>
    </section>
  );
};

export default Features;
