import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Розалия Гафарова
            </h1>
            <div className="hidden md:flex gap-6">
              {['about', 'resume', 'portfolio', 'hobbies', 'plans', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'about' && 'Обо мне'}
                  {section === 'resume' && 'Резюме'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'hobbies' && 'Увлечения'}
                  {section === 'plans' && 'Планы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <Badge className="mb-4 bg-gradient-primary text-white">Ученица 11 класса</Badge>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Гафарова Розалия Робертовна
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Ученица 11 А класса
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('resume')} 
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Мое резюме
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/b959e227-a269-41af-af35-08f761547478.jpg"
                alt="Розалия Гафарова"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Обо мне
          </h3>
          <Card className="max-w-4xl mx-auto animate-fade-in border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                С детства проявляю интерес к естественным наукам, особенно к химии, биологии и медицине. 
                Моя увлеченность этими предметами укрепилась благодаря примеру моей старшей сестры, 
                студентки 2 курса медицинского университета, которая является для меня настоящим кумиром и вдохновителем.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Помимо учебы, увлекаюсь путешествиями, люблю открывать для себя новые города и их достопримечательности. 
                Меня привлекает природа, я обожаю взбираться на горы и чувствовать единение с окружающим миром. 
                Стараюсь проводить время с пользой, общаться с интересными людьми и узнавать новое.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="resume" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Резюме
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="animate-fade-in border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">Личная информация</h4>
                </div>
                <div className="space-y-3">
                  <p><strong>ФИО:</strong> Гафарова Розалия Робертовна</p>
                  <p><strong>Дата рождения:</strong> 02.04.2008</p>
                  <p><strong>Место рождения:</strong> г. Ишимбай</p>
                  <p><strong>Телефон:</strong> +7 987 589 83-58</p>
                  <p><strong>Email:</strong> gafarovarozaliya@gmail.ru</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Icon name="GraduationCap" className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">Образование</h4>
                </div>
                <div className="space-y-3">
                  <p><strong>Школа:</strong> МОБУ СОШ села Новая Отрадовка</p>
                  <p><strong>Класс:</strong> 11А</p>
                  <p><strong>Профильные предметы:</strong></p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-primary/10 text-primary border border-primary">Химия</Badge>
                    <Badge className="bg-secondary/10 text-secondary border border-secondary">Биология</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-2 hover:shadow-xl transition-shadow md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">Цель</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Поступление в ВУЗ на стоматологический факультет и дальнейшее развитие в сфере стоматологии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-secondary mt-1" size={20} />
                    <span>Демонстрация академических достижений и внеучебных навыков для получения гранта или стипендии на обучение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Портфолио достижений
          </h3>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="group animate-fade-in border-2 hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/img/42c0cece-17f9-40cb-bb0a-a7edc1d447f0.jpg" 
                      alt="Диплом за академические достижения"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-semibold">Диплом победителя</p>
                        <p className="text-sm opacity-90">Академические достижения</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group animate-fade-in border-2 hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/img/feea892f-5d20-4024-affb-5f93f67bd483.jpg" 
                      alt="Награда за отличные результаты"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-semibold">Награда за отличные результаты</p>
                        <p className="text-sm opacity-90">Учебные успехи</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group animate-fade-in border-2 hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/img/f72d0ed2-854d-456b-8312-a444e4fe5dba.jpg" 
                      alt="Сертификат олимпиады"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="font-semibold">Олимпиада по химии</p>
                        <p className="text-sm opacity-90">Призер регионального этапа</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-fade-in border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">Дополнительные достижения</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-gradient-card rounded-lg border border-primary/20">
                    <Icon name="Trophy" className="text-primary mb-2" size={32} />
                    <p className="font-semibold">Дипломы и награды</p>
                    <p className="text-sm text-gray-600 mt-1">Академические достижения</p>
                  </div>
                  <div className="p-4 bg-gradient-card rounded-lg border border-secondary/20">
                    <Icon name="Star" className="text-secondary mb-2" size={32} />
                    <p className="font-semibold">Олимпиады</p>
                    <p className="text-sm text-gray-600 mt-1">Участие в научных мероприятиях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Увлечения
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="animate-fade-in border-2 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Plane" className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Путешествия</h4>
                <p className="text-gray-600">Открытие новых городов и культур</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-2 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Mountain" className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Горы и природа</h4>
                <p className="text-gray-600">Покорение вершин и единение с природой</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-2 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Общение</h4>
                <p className="text-gray-600">Встречи с интересными людьми</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Планы на будущее
          </h3>
          <Card className="max-w-4xl mx-auto animate-fade-in border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-primary rounded-full">
                  <Icon name="Rocket" className="text-white" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Оренбургский государственный медицинский университет</h4>
                  <Badge className="mt-2 bg-secondary text-white">Стоматологический факультет</Badge>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                В будущем планирую поступать в Оренбургский государственный медицинский университет 
                на стоматологический факультет, чтобы посвятить свою жизнь заботе о здоровье людей.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Связаться со мной
          </h3>
          <Card className="max-w-2xl mx-auto animate-fade-in border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Отправить сообщение
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t">
                <h5 className="font-semibold mb-4">Контактная информация</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span>gafarovarozaliya@gmail.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span>+7 987 589 83-58</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Гафарова Розалия Робертовна. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;