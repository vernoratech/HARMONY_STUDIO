import { Link } from 'react-router-dom';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING } from '../data';
import PricingCard from '../components/ui/PricingCard';
import SectionHeading from '../components/ui/SectionHeading';

const PricingPage = () => {
    const faqs = [
        {
            question: 'Can I try a class before committing?',
            answer: 'Absolutely! We offer a complimentary first class for all new members. Just book through our contact page or walk in.'
        },
        {
            question: 'What\'s included in the Unlimited plan?',
            answer: 'You get unlimited access to all Dance, Yoga, and Zumba classes, priority booking, guest passes, and locker access.'
        },
        {
            question: 'Can I freeze my membership?',
            answer: 'Yes, you can pause your membership for up to 30 days per year at no extra cost.'
        },
        {
            question: 'Do you offer corporate packages?',
            answer: 'We provide customized corporate wellness programs. Contact us for a tailored quote for your organization.'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative !pt-32 !pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/10 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623]/5 rounded-full blur-3xl" />

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4 block">
                        Membership Plans
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white !mb-6">
                        Simple, <span className="gradient-text">Transparent</span> Pricing
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Invest in yourself with plans designed to fit every lifestyle and budget.
                        No hidden fees, no long-term contracts.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                        {PRICING.map((plan, index) => (
                            <PricingCard key={plan.name} plan={plan} index={index} />
                        ))}
                    </div>

                    {/* Money Back Guarantee */}
                    <div className="max-w-2xl mx-auto !mt-16 text-center">
                        <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 text-green-400 !px-6 !py-3 rounded-full text-sm font-medium">
                            <Check size={18} className="!mr-2" />
                            30-Day Money Back Guarantee — No Questions Asked
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="!py-24 bg-[#1A1A1A]">
                <div className="container-custom">
                    <SectionHeading
                        label="Compare Plans"
                        title="Feature Comparison"
                        subtitle="See what's included in each membership tier"
                        light={true}
                    />

                    <div className="max-w-4xl mx-auto overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left !py-4 !px-4 text-gray-400 font-medium">Feature</th>
                                    {PRICING.map((plan) => (
                                        <th key={plan.name} className={`text-center !py-4 !px-4 font-bold ${plan.highlighted ? 'text-[#F5A623]' : 'text-white'}`}>
                                            {plan.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'Monthly Classes', values: ['5', 'Unlimited', 'Unlimited'] },
                                    { feature: 'All Disciplines', values: [false, true, true] },
                                    { feature: 'Guest Passes', values: [false, '2/month', 'Unlimited'] },
                                    { feature: 'Locker Access', values: [false, true, true] },
                                    { feature: 'Priority Booking', values: [false, true, true] },
                                    { feature: 'Personal Training', values: [false, false, '1/month'] },
                                    { feature: 'VIP Events', values: [false, false, true] },
                                    { feature: 'Retreat Discounts', values: [false, false, '25% off'] },
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="!py-4 !px-4 text-gray-300">{row.feature}</td>
                                        {row.values.map((value, i) => (
                                            <td key={i} className="text-center !py-4 !px-4">
                                                {typeof value === 'boolean' ? (
                                                    value ? (
                                                        <Check size={20} className="text-green-400 mx-auto" />
                                                    ) : (
                                                        <span className="text-gray-600">—</span>
                                                    )
                                                ) : (
                                                    <span className="text-white font-medium">{value}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="!py-24 bg-[#0A0A0A]">
                <div className="container-custom">
                    <SectionHeading
                        label="FAQ"
                        title="Common Questions"
                        subtitle="Everything you need to know about our memberships"
                        light={true}
                    />

                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-2xl !p-6 hover:border-[#F5A623]/30 transition-colors"
                            >
                                <div className="flex items-start">
                                    <HelpCircle size={20} className="text-[#F5A623] !mr-4 !mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white !mb-2">{faq.question}</h4>
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="!py-20 bg-gradient-to-r from-[#F5A623] to-[#FFBE4D]">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold text-black !mb-4">
                        Ready to Transform?
                    </h2>
                    <p className="text-black/70 text-lg !mb-8 max-w-xl mx-auto">
                        Start your wellness journey today. Your first class is on us.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-black text-white !px-8 !py-4 rounded-full font-bold hover:bg-gray-900 transition-all"
                    >
                        Book Free Trial
                        <ArrowRight size={18} className="!ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
