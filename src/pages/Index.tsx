
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header с адресом */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#9b87f5]" />
            <span className="text-sm font-medium">ул. Ставропольская, 149</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 px-4 pt-4 pb-20">
        {/* Дополнительные услуги */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-gray-100 bg-white"
            >
              <Receipt className="h-6 w-6 text-[#9b87f5]" />
              <span className="text-sm font-medium">Рецепты</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-gray-100 bg-white"
            >
              <Ticket className="h-6 w-6 text-[#9b87f5]" />
              <span className="text-sm font-medium">Купоны</span>
            </Button>
          </div>
        </section>

        {/* Бонусные карты */}
        <section className="mb-8">
          <h2 className="text-lg font-medium mb-4">Ваши бонусные карты</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-4/5">
                  <Card className="bg-gradient-to-br from-[#9b87f5] to-[#7e69ab] text-white overflow-hidden rounded-xl">
                    <CardContent className="p-6 flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="font-bold">Магазин {index + 1}</span>
                        <span className="text-sm opacity-80">{1000 + index * 100} баллов</span>
                      </div>
                      <div className="mt-6 text-xs opacity-80">Карта #{1234567890 + index}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </section>

        {/* Варианты корзины */}
        <section>
          <h2 className="text-lg font-medium mb-4">Выберите корзину</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-32 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-100 bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b87f5]/10">
                <ShoppingCart className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <span className="text-sm font-medium text-center">Самая быстрая доставка</span>
            </Button>
            <Button
              variant="outline"
              className="h-32 flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-100 bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b87f5]/10">
                <ShoppingCart className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <span className="text-sm font-medium text-center">Самая бюджетная корзина</span>
            </Button>
          </div>
        </section>
      </main>

      {/* Нижняя навигация */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-sm">
        <nav className="flex justify-around py-3">
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <User className="h-5 w-5" />
            <span className="text-xs">Профиль</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Корзина</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Store className="h-5 w-5" />
            <span className="text-xs">Магазины</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Аналитика</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
