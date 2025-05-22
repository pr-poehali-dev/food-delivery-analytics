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
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Данные о бонусных картах магазинов
const storeCards = [
  {
    name: "Магнит",
    points: 1250,
    cardNumber: "1234567890",
    color: "from-[#e63e62] to-[#c01d42]",
  },
  {
    name: "Табрис",
    points: 980,
    cardNumber: "2345678901",
    color: "from-[#37b24d] to-[#2b8a3e]",
  },
  {
    name: "Лента",
    points: 1580,
    cardNumber: "3456789012",
    color: "from-[#4263eb] to-[#3b5bdb]",
  },
  {
    name: "Пятерочка",
    points: 760,
    cardNumber: "4567890123",
    color: "from-[#f59f00] to-[#e67700]",
  },
  {
    name: "Метро",
    points: 2100,
    cardNumber: "5678901234",
    color: "from-[#7950f2] to-[#6741d9]",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header с адресом */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#9b87f5]" />
            <span className="text-base font-medium">
              ул. Ставропольская, 149
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10"
          >
            <ChevronRight className="h-6 w-6" />
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
              className="h-24 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-gray-100 bg-white shadow-sm hover:bg-[#f8f5ff] hover:border-[#9b87f5]/30"
            >
              <Receipt className="h-8 w-8 text-[#9b87f5]" />
              <span className="text-base font-medium">Рецепты</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-gray-100 bg-white shadow-sm hover:bg-[#f8f5ff] hover:border-[#9b87f5]/30"
            >
              <Ticket className="h-8 w-8 text-[#9b87f5]" />
              <span className="text-base font-medium">Купоны</span>
            </Button>
          </div>
        </section>

        {/* Бонусные карты */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-5">Ваши бонусные карты</h2>
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
                    className={`bg-gradient-to-br ${store.color} text-white overflow-hidden rounded-xl shadow-lg`}
                  >
                    <CardContent className="p-6 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{store.name}</span>
                        <span className="text-base font-medium">
                          {store.points} баллов
                        </span>
                      </div>
                      <div className="mt-8 text-sm opacity-80">
                        Карта #{store.cardNumber}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 h-9 w-9" />
            <CarouselNext className="right-1 h-9 w-9" />
          </Carousel>
        </section>

        {/* Варианты корзины */}
        <section>
          <h2 className="text-xl font-semibold mb-5">Выберите корзину</h2>
          <div className="grid grid-cols-2 gap-5">
            <Button
              variant="outline"
              className="h-36 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm hover:bg-[#f8f5ff] hover:border-[#9b87f5]/30"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#9b87f5]/15">
                <ShoppingCart className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <span className="text-base font-medium text-center">
                Самая быстрая доставка
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-36 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm hover:bg-[#f8f5ff] hover:border-[#9b87f5]/30"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#9b87f5]/15">
                <ShoppingCart className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <span className="text-base font-medium text-center">
                Самая бюджетная корзина
              </span>
            </Button>
          </div>
        </section>
      </main>

      {/* Нижняя навигация */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-md">
        <nav className="flex justify-around py-3">
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <User className="h-7 w-7" />
            <span className="text-xs font-medium">Профиль</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <ShoppingCart className="h-7 w-7" />
            <span className="text-xs font-medium">Корзина</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Store className="h-7 w-7" />
            <span className="text-xs font-medium">Магазины</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <BarChart3 className="h-7 w-7" />
            <span className="text-xs font-medium">Аналитика</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
