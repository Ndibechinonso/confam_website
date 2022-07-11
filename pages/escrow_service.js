import PageIntro from "../components/PageIntro"
import { escrowCardArray } from "../data"
import EscrowCard from "../components/EscrowService/EscrowCard"
import Testimonials from "../components/EscrowService/Testimonials"
const EscrowService = () => {
    return(
        <div className="px-[1.125rem] md:px-[6.25rem] pb-[6.25rem] md:mb-[12.5rem]">
<PageIntro pageTitle title="Escrow service" description="At CONFAM MONEY, we operate an online escrow
 market wherein we stand as a third-party entity
 between two parties with the interest
 to engage in legal transactions." />

<div className="grid grid-cols-1 xl:grid-cols-3 gap-x-[2.625rem] gap-y-[2rem] md:gap-y-[3.5rem] mt-[4.688rem] md:mt-[8.938rem] mb-[6.938rem] md:mb-[15.875rem]">
{escrowCardArray.map((card, index) => {
    return <EscrowCard key={index} cardTitle={card.title} cardDescription={card.text} />
})}
</div>
<Testimonials />
        </div>
    )
}

export default EscrowService