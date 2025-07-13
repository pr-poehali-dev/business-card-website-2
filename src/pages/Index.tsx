import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Дарья Колтышева</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Главная
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#process"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Процесс
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-6 animate-float">
            <Icon name="Palette" size={48} className="text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Веб-дизайнер
            <span className="block text-blue-600">Дарья Колтышева</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаю современные и красивые дизайны для сайтов. Начинающий
            специалист с большой страстью к творчеству и деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Посмотреть портфолио
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">О себе</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Я начинающий веб-дизайнер, который влюблен в создание красивых и
                функциональных интерфейсов. Каждый проект для меня — это
                возможность воплотить идеи в жизнь и создать что-то уникальное.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Lightbulb" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Креативность</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Внимание к деталям</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Понимание пользователей</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Быстрое обучение</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                <Icon name="User" size={120} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Портфолио</h2>
            <p className="text-gray-600">Примеры моих работ и проектов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/img/d0ba2f4c-f7e4-4477-aad7-ddaa183b7620.jpg"
                    alt="Веб-сайт портфолио"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Веб-сайт портфолио
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Современный дизайн портфолио с минималистичным интерфейсом и
                    синими акцентами
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                      UI/UX
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      Веб-дизайн
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/img/40e955ae-5233-4301-9975-6a08f996cb35.jpg"
                    alt="Мобильное приложение"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Мобильное приложение
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Дизайн интерфейса мобильного приложения с яркими цветами и
                    удобной навигацией
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
                      Mobile UI
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      UX Design
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/img/70110e39-dd4f-4708-977b-caaaac169d51.jpg"
                    alt="Интернет-магазин"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Интернет-магазин
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Дизайн современного интернет-магазина с удобным каталогом
                    товаров
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                      E-commerce
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      Веб-дизайн
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Процесс работы
            </h2>
            <p className="text-gray-600">Как я работаю над проектами</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "Search",
                title: "Исследование",
                desc: "Изучаю требования и целевую аудиторию",
              },
              {
                icon: "Sketch",
                title: "Концепция",
                desc: "Создаю идеи и варианты решений",
              },
              {
                icon: "Palette",
                title: "Дизайн",
                desc: "Разрабатываю визуальную концепцию",
              },
              {
                icon: "CheckCircle",
                title: "Готово",
                desc: "Финализирую и передаю проект",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
          <p className="text-gray-300 mb-8">
            Свяжитесь со мной, чтобы обсудить ваш проект. Буду рада помочь
            воплотить ваши идеи в жизнь!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={20} className="text-blue-400" />
              <span>darya.koltysheva@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={20} className="text-blue-400" />
              <span>+7 (999) 123-45-67</span>
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Send" size={16} className="mr-2" />
              Написать мне
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Скачать резюме
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
