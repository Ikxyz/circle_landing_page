import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Circles?',
      answer:
        'Circles is a decentralized savings platform that allows users to save collaboratively with friends, family, or co-workers while securely storing funds on the blockchain.',
    },
    {
      question: 'How does saving in Circles work?',
      answer: 'Users can create or join saving circles, where they pool their resources and save together, enjoying friendly competition and rewards for reaching financial goals.',
    },
   
  ],
  [
    {
      question: 'What are the benefits of using Circles over traditional savings methods?',
      answer:
        'Circles offers collaborative saving, blockchain security, and engaging competition, making saving more fun, secure, and motivating than traditional savings accounts.',
    },
    {
      question:
        'Can I withdraw my savings at any time?',
      answer:
        'Yes, you can withdraw your savings from your circle at any time, as long as you follow the guidelines set by your circle.',
    },
    
  ],
  [
    {
      question:
        'How fast are transactions on Circles?',
      answer:
        'Transactions on Circles are fast and efficient, powered by Base, a quick and affordable blockchain. This means your transactions won’t get delayed or stuck, ensuring a smooth saving experience.',
    },
    {
      question: 'Is my money secure on Circles?',
      answer:
        'Yes! Your funds are stored on-chain in a secure smart contract, ensuring complete transparency and eliminating the risk of third-party access.',
    },
    // {
    //   question: 'I lost my password, how do I get into my account?',
    //   answer:
    //     'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    // },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Have questions about Circles? We’ve compiled a list of frequently asked questions to help you understand how our platform works, its benefits, and how you can get started. 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
