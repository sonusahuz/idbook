import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function GSTLanding() {
  return (
    <div className="container mx-auto py-12 md:py-24">
      <h1 className="text-4xl  text-center font-bold text-[#3B5998]">
        Hassle-free GST
      </h1>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border px-4 my-3 rounded">
              <AccordionTrigger className="text-lg text-[#3B5998]">
                Claim input credit in every state
              </AccordionTrigger>
              <AccordionContent>
                Details about claiming input credit across different states...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border px-4 my-3 rounded">
              <AccordionTrigger className="text-lg text-[#3B5998]">
                Claim input credit for full GST amount
              </AccordionTrigger>
              <AccordionContent>
                Information about claiming full GST amount credit...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border px-4 my-3 rounded">
              <AccordionTrigger className="text-lg text-[#3B5998]">
                One - time Vendor Registration & Payment
              </AccordionTrigger>
              <AccordionContent>
                Details about vendor registration and payment process...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#E8F0FE"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#E8F0FE"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="#E8F0FE"
                strokeWidth="2"
              />

              {/* Text along the circles */}
              <path
                id="service-curve"
                d="M 200,20 A 180,180 0 0 1 380,200"
                fill="none"
              />
              <text>
                <textPath href="#service-curve" startOffset="25%">
                  Service
                </textPath>
              </text>

              <path
                id="goods-curve"
                d="M 200,380 A 180,180 0 0 1 20,200"
                fill="none"
              />
              <text>
                <textPath href="#goods-curve" startOffset="25%">
                  Goods
                </textPath>
              </text>

              <path
                id="tax-curve"
                d="M 380,200 A 180,180 0 0 1 200,380"
                fill="none"
              />
              <text>
                <textPath href="#tax-curve" startOffset="75%">
                  Tax
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-[#3B5998]">GST</span>
          </div>
        </div>
      </div>
    </div>
  );
}
