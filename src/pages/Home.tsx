import React, { useState, useEffect } from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

import { Check, Clock, CheckSquare } from "lucide-react";

const investmentData = [{
    month: "1",
    value: 100
}, {
    month: "2",
    value: 105
}, {
    month: "3",
    value: 112
}, {
    month: "4",
    value: 108
}, {
    month: "5",
    value: 118
}, {
    month: "6",
    value: 128
}, {
    month: "7",
    value: 135
}, {
    month: "8",
    value: 142
}, {
    month: "9",
    value: 150
}, {
    month: "10",
    value: 158
}, {
    month: "11",
    value: 165
}, {
    month: "12",
    value: 172
}, {
    month: "13",
    value: 180
}, {
    month: "14",
    value: 190
}, {
    month: "15",
    value: 263
}];

const webinarContent = [
    "Pokażę Ci jak w 5 krokach rozpocząć sukcesownie inwestować, niezależnie od tego jaka jest Twoja obecna pozycja finansowa i doświadczenie.",
    "Pokażę Ci wiele przykładów praktycznego zastosowania mojej strategii 'Market Trend Follower' która pozwoli Ci osiągnąć stabilne zyski.",
    "Opowiem Ci jak poukładac sobie proces inwestycyjny, abyś mógł zająć się inwestowaniem, nawet jak posiadasz obecnie bardzo mało wolnego czasu.",
    "Zaprezentuję Ci jak możesz dzięki inwestowaniu realizować własne cele inwestycyjne i życiowe."
];

const testimonials = [{
    id: 1,
    name: "Webinar Participant",
    email: "robert.smug@example.com",
    content: "\"Według mnie Robert to najlepszy trener w branży inwestycyjnej. Po udziałze w webinarze zacząłem inwestować właściwie i już widzę pierwsze efekty.Według mnie warto każdemu zainteresowanemu inwestycjami poświęcić czas na udział w tym webinarze.\"",
    avatar: "W"
}, {
    id: 2,
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    content: "\"Według mojego doświadczenia, Robert jest jednym z najlepszych specjalistów w dziedzinie inwestycji.Według mnie warto zapisać się na ten webinar, ponieważ dowiesz się naprawdę wiele praktycznych rzeczy, które możesz zastosować od razu po webinarze.\"",
    avatar: "J"
}, {
    id: 3,
    name: "Łukasz",
    email: "lukasz@example.com",
    content: "\"Według mnie Robert to profesjonalista. Po webinarze zmieniłem swoje podejście do inwestycji i według mnie to jedna z najlepszych inwestycji czasu, jakie kiedykolwiek zrobiłem. Polecam wszystkim, którzy chcą nauczyć się inwestować właściwie.\"",
    avatar: "L"
}];

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const now = new Date();

        const options = {
            timeZone: "Europe/Warsaw",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };

        const polishTimeStr = now.toLocaleString("en-US", options);
        const polishNow = new Date(polishTimeStr);
        const dayOfWeek = polishNow.getDay();
        let daysToAdd = (7 - dayOfWeek) % 7;
        const targetDate = new Date(polishNow);
        targetDate.setDate(polishNow.getDate() + daysToAdd);
        targetDate.setHours(20, 0, 0, 0);

        if (daysToAdd === 0 && polishNow > targetDate) {
            targetDate.setDate(targetDate.getDate() + 7);
        }

        const difference = targetDate.getTime() - polishNow.getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(difference % (1000 * 60) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex justify-center gap-8 mt-8">
            {Object.entries(timeLeft).map(([interval, value]) => <div key={interval} className="text-center">
                <div className="text-4xl font-bold text-emerald-800">{value}</div>
                <div className="text-sm text-gray-600 uppercase mt-1 font-bold">
                    {interval === "days" ? "DNI" : interval === "hours" ? "GODZINY" : interval === "minutes" ? "MINUTY" : "SEKUNDY"}
                </div>
            </div>)}
        </div>
    );
};

const CtaButton = (
    {
        text
    }: {
        text: string;
    }
) => {
    return (
        <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 uppercase text-center shadow-lg hover:shadow-xl w-full sm:w-auto">
            {text}
        </button>
    );
};

export default function Home() {
    return (
        <div className="max-w-[950px] mx-auto px-4 py-8 bg-white">
            <div className="text-center mb-16">
                <div className="w-[140px] h-[140px] mx-auto mb-6 rounded-full bg-gray-200">
                    <img
                        src="https://s.coze.cn/t/07jbx6cZyts/"
                        alt="Robert Smug"
                        className="w-full h-full object-contain p-1" />
                </div>
                <p
                    className="text-gray-600 mb-4"
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        backgroundImage: "none",
                        color: "#B6BBCC"
                    }}>Zapisz się na BEZPŁATNY WEBINAR, na którym dowiesz się:</p>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                    <br />
                    <span
                        style={{
                            fontFamily: "\"Playfair Display\", sans-serif",
                            fontSize: "2rem",
                            whiteSpace: "preserve",
                            outline: "none !important"
                        }}>WSZYSTKO CO MUSISZ WIEDZIEĆ O INWESTOWANIU
                                                                                                                                                                                                                                                                                                                    </span> <br />INWESTOWANIU<br />
                    <span
                        className="text-orange-500"
                        style={{
                            color: "#0A0A0A"
                        }}>ABY ODNIEŚĆ SUKCES!</span><br />
                </h1>
                  <CtaButton text="KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!" url={import.meta.env.VITE_BUTTON_URL || '#'} />
                <p
                    className="text-gray-600 mt-6"
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold"
                    }}>Webinar odbędzie się za 7 dni（niedziela）, o godzinie 20.00 po dodaniu:</p>
                <CountdownTimer />
            </div>
            <div className="text-center mb-12">
                <p
                    className="text-lg text-gray-800"
                    style={{
                        fontWeight: "bold",
                        fontSize: "24px"
                    }}>PODCZAS WEBINARU POKAŻĘ CI KROK PO KROKU STRATEGIE INWESTYCYJNE DZIEKI KTÓRYM MOZESZ OSIĄGĄĆ TAKIE WYNIKI JAK PONIŻEJ I DZIĘKI TYM REALIZOWAĆ SWOJE CELE.</p>
            </div>
            <div className="mb-16">
                <div
                    className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8 flex justify-center items-center"
                    style={{
                        backgroundColor: "#FFFFFF"
                    }}>
                    <img
                        src="https://s.coze.cn/t/SMZ-k4BKnYk/"
                        alt="Investment performance chart showing 163% profit in 15 months"
                        className="w-full h-auto rounded-lg shadow-sm" />
                </div>
             <div className="text-center">
                 <CtaButton text="KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!" url={import.meta.env.VITE_BUTTON_URL || '#'} />
            </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Profesor Lech</h3>
                    <p
                        className="text-gray-700 mb-4"
                        style={{
                            fontWeight: "bold",
                            fontSize: "18px"
                        }}>Prowadzący webinar inwestuje już  na rynkach finansowych od 2007 roku. Specjalizuje się w inwestowaniu na rynkach indeksów, surowców, towarów, płodów rolnych i akcji. Jest wpisany na listę Doradców Inwestycyjnych w KNF pod  nr 740, oraz ukończył studia podyplomowe MBA. Prywatnie Tata 3 dzieci, pasjonat jazdy rowerowej, gry w golfa, zdrowego trybu życia oraz samochodów typu SUV.</p>
                    <></>
                </div>
                <div className="md:w-1/2 w-full">
                    <img
                        src="https://s.coze.cn/t/lAVKfK74vWc/"
                        alt="Robert Smug"
                        className="w-full h-auto max-h-[300px] object-contain mx-auto" />
                </div>
            </div>
         <div className="text-center">
             <CtaButton text="KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!" url={import.meta.env.VITE_BUTTON_URL || '#'} />
        </div>
            <div className="mb-16">
                <div
                    className="webinar-section-wrapper"
                    style={{
                        backgroundColor: "#D6DAE4"
                    }}>
                    <div
                        className="bg-green-50 p-8 rounded-lg mb-16 mt-[70px]"
                        style={{
                            backgroundColor: "#D6DAE4"
                        }}>
                        <h2 className="text-2xl font-bold text-black mb-6 text-center uppercase">NA WEBINARZE:</h2>
                        <div className="space-y-6 mb-10">
                            {webinarContent.map((item, index) => <div key={index} className="flex items-start">
                                <div className="text-green-600 mr-3 mt-1">
                                    <CheckSquare size={20} />
                                </div>
                                <p className="text-gray-700">{item}</p>
                            </div>)}
                        </div>
                        <div
                            className="bg-white p-6 rounded-lg shadow-sm mb-8 text-center"
                            style={{
                                backgroundColor: "transparent"
                            }}>
                            <p
                                className="text-gray-700"
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold"
                                }}><span className="font-bold text-red-600">NIESPODZIANKA:</span>Każda osoba, która zarejestruje się i pojawi na webinarze, dowie się w jaki sposób może otrzymać SUPER CENNY PREZENT, KTÓRY POMOŻE JEJ we właściwym rozpoczęciu INWESTOWANIA aby uniknąć podstawowych błędów.</p>
                            <p
                                className="text-gray-600 text-sm mt-4"
                                style={{
                                    fontSize: "18px"
                                }}>Uczestnictwo w webinarze jest bezpłatne. Ilość miejsc w pokoju webinarowym jest ograniczona tylko do 100, dlatego warto się zarejestrować już teraz, aby otrzymać wspomnianą powyżej mapę myśli.</p>
                        </div>
                 <div className="text-center">
                     <CtaButton text="KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!" url={import.meta.env.VITE_BUTTON_URL || '#'} />
                </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://s.coze.cn/t/byH51a3sRIE/"
                                    alt="Webinar participant testimonial"
                                    className="w-[calc(100%-30px)] h-auto rounded-lg shadow-sm mx-auto" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="https://space-static.coze.cn/coze_space/7545698746941538598/upload/unnamed%284%29_472x302.png?sign=1759465233-cfd37fb0da-0-80bd96964283ce6e07c7ed71b3f71c5ab7e0c48e761877bec7c14d83157a1b9e"
                                alt="Jan Kowalski testimonial"
                                className="w-[calc(100%-30px)] h-auto rounded-lg shadow-sm mx-auto" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="https://space-static.coze.cn/coze_space/7545698746941538598/upload/unnamed%285%29_502x316.png?sign=1759465243-f02e88c80d-0-f5c8011cf720d3447deb8b0976915d810e3038e7f24ccac6958d883c461a89fe"
                                alt="Łukasz testimonial"
                                className="w-[calc(100%-30px)] h-auto rounded-lg shadow-sm mx-auto" />
                        </div>
                    </div>
                </div>
         <div className="text-center mt-10">
             <CtaButton text="KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!" url={import.meta.env.VITE_BUTTON_URL || '#'} />
        </div>
            </div>
            <footer
                className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200"
                style={{
                    fontSize: "20px"
                }}>© 2025 Ochrona informacji RODO | Lech.FB</footer>
        </div>
    );
}