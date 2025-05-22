import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  ChevronRight,
  ShoppingCart,
  User,
  BarChart3,
  Store,
  Receipt,
  Ticket,
  Clock,
  Wallet,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Данные о бонусных картах магазинов с яркими градиентами
const storeCards = [
  {
    name: "Магнит",
    points: 1250,
    cardNumber: "1234567890",
    color: "from-[#ff6b6b] to-[#ee5253]",
  },
  {
    name: "Табрис",
    points: 980,
    cardNumber: "2345678901",
    color: "from-[#1dd1a1] to-[#10ac84]",
  },
  {
    name: "Лента",
    points: 1580,
    cardNumber: "3456789012",
    color: "from-[#54a0ff] to-[#2e86de]",
  },
  {
    name: "Пятерочка",
    points: 760,
    cardNumber: "4567890123",
    color: "from-[#feca57] to-[#ff9f43]",
  },
  {
    name: "Метро",
    points: 2100,
    cardNumber: "5678901234",
    color: "from-[#5f27cd] to-[#341f97]",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff]">
      {/* Header с адресом */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-7 w-7 text-[#6c5ce7]" />
            <span className="text-base font-medium">
              ул. Ставропольская, 149
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 hover:bg-[#f3f0ff]"
          >
            <ChevronRight className="h-6 w-6 text-[#6c5ce7]" />
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 px-5 pt-6 pb-24">
        {/* Дополнительные услуги */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-5">
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-[#e9e4ff] bg-white shadow-sm hover:bg-[#f3f0ff] hover:border-[#6c5ce7]/40 transition-all"
            >
              <div className="bg-[#f3f0ff] p-3 rounded-full">
                <Receipt className="h-8 w-8 text-[#6c5ce7]" />
              </div>
              <span className="text-base font-medium">Рецепты</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-[#e9e4ff] bg-white shadow-sm hover:bg-[#f3f0ff] hover:border-[#6c5ce7]/40 transition-all"
            >
              <div className="bg-[#f3f0ff] p-3 rounded-full">
                <Ticket className="h-8 w-8 text-[#6c5ce7]" />
              </div>
              <span className="text-base font-medium">Купоны</span>
            </Button>
          </div>
        </section>

        {/* Бонусные карты */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-5 text-[#2d3436]">
            Ваши бонусные карты
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {storeCards.map((store, index) => (
                <CarouselItem key={index} className="basis-4/5">
                  <Card
                    className={`bg-gradient-to-br ${store.color} text-white overflow-hidden rounded-xl shadow-lg border-0`}
                  >
                    <CardContent className="p-6 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl">{store.name}</span>
                        <span className="text-base font-medium bg-white/20 px-3 py-1 rounded-full">
                          {store.points} баллов
                        </span>
                      </div>
                      <div className="mt-8 text-sm opacity-90 bg-black/10 inline-block px-3 py-1.5 rounded-lg w-auto">
                        Карта #{store.cardNumber}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 h-10 w-10 bg-white/80 border-0 hover:bg-white" />
            <CarouselNext className="right-1 h-10 w-10 bg-white/80 border-0 hover:bg-white" />
          </Carousel>
        </section>

        {/* Варианты корзины */}
        <section>
          <h2 className="text-xl font-semibold mb-5 text-[#2d3436]">
            Выберите корзину
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <Button
              variant="outline"
              className="h-36 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#e9e4ff] bg-white shadow-sm hover:bg-[#f3f0ff] hover:border-[#6c5ce7]/40 transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f3f0ff]">
                <Clock className="h-8 w-8 text-[#6c5ce7]" />
              </div>
              <span className="text-base font-medium text-center">
                Быстрая доставка
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-36 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#e9e4ff] bg-white shadow-sm hover:bg-[#f3f0ff] hover:border-[#6c5ce7]/40 transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f3f0ff]">
                <Wallet className="h-8 w-8 text-[#6c5ce7]" />
              </div>
              <span className="text-base font-medium text-center">
                Бюджетная корзина
              </span>
            </Button>
          </div>
        </section>
      </main>

      {/* Нижняя навигация */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e9e4ff] shadow-md">
        <nav className="flex justify-around py-3">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 hover:bg-[#f3f0ff]"
          >
            <User className="h-7 w-7 text-[#6c5ce7]" />
            <span className="text-xs font-medium">Профиль</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 hover:bg-[#f3f0ff]"
          >
            <ShoppingCart className="h-7 w-7 text-[#6c5ce7]" />
            <span className="text-xs font-medium">Корзина</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 hover:bg-[#f3f0ff]"
          >
            <Store className="h-7 w-7 text-[#6c5ce7]" />
            <span className="text-xs font-medium">Магазины</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 hover:bg-[#f3f0ff]"
          >
            <BarChart3 className="h-7 w-7 text-[#6c5ce7]" />
            <span className="text-xs font-medium">Аналитика</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
