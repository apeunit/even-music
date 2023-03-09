import SmallText from "@/components/ui/typography/SmallText";
import CustomLink from "@/components/ui/CustomLink";

export default function Header() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-13.25 sm:mb-44 xl:mb-52">
      <div className="flex flex-wrap sm:col-start-2 sm:flex-nowrap">
        <div className="flex-1 sm:flex-initial">
          <div className="sm:border-l-0.5 border-black pt-5 pr-0.5 sm:px-2.5 pb-4.25 sm:pt-10 sm:pb-0.5 xl:pl-5 xl:pr-10 xl:pb-0">
            <div className="max-w-48.25 sm:max-w-xs md:max-w-56 lg:max-w-67.2 xl:max-w-xs pr-4.5 sm:pr-3">
              <SmallText>
                Even wants to fundamentally change the way artists and their
                communities interact. Even aims to reshape the future of music
                through deeper collaboration of all participants in the
                ecosystem.
              </SmallText>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial">
          <div className="h-full flex flex-col border-l-0.5 border-black pt-5 pl-5 gap-y-2.5 sm:pl-2.5 sm:pt-10 xl:pl-5 xl:gap-y-5">
            <CustomLink url="/pdfs/even-litepaper.pdf">Litepaper</CustomLink>
            <CustomLink url="mailto:even@apeunit.com">Get In Touch</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
