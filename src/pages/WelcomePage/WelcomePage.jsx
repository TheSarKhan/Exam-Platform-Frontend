/* eslint-disable no-unused-vars */
import ExamCard from "../../components/ExamCard/ExamCard";
import "./WelcomePage.css";
import { examData } from "../../staticDatas/examData";
import { videoData } from "../../staticDatas/videoData";
import VideoCard from "../../components/VideoCard/VideoCard";
import { ads } from "../../staticDatas/adsData";
import useEmblaCarousel from "embla-carousel-react";
import Testimonial from "../../components/Testiomonial/Testimonial";
import authorStudent from "../../assets/images/authorStudent.png";
import academixChild from "../../assets/images/academixChild.png";
import alarmClock from "../../assets/icons/alarm-clock.png";
import medal from "../../assets/icons/medal.png";
import calculator from "../../assets/icons/calculator.png";
import PricingCard from "../../components/PricingCard/PricingCard";
import { pricingData } from "../../staticDatas/pricingData";
import Banner from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WelcomePage() {
  const options = { containScroll: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const text = "Bu platformanı istifadə etdikdən sonra dərs prosesim daha dinamik və maraqlı keçməyə başladı. Şagirdlər testləri sevərək işləyir, nəticələr də daha yaxşı olur.";
  const text2 = "Təhsil – hər bir uşağın doğuşdan gələn haqqıdır. Biz bu haqqın əlçatan olmasına çalışırıq.";
  const store = useSelector(store => store.auth);
  const user = store.role;
  return (
    <>
      <div className="container">
        <section>
          <Banner user={user} />
        </section>
        <section className="video-instruction-container">
          <h2 className="instruction-header">İstifadə təlimatları</h2>
          <div className="instruction-content">
            {videoData.map(item => (
              <VideoCard key={item.id} title={item.title} description={item.description} youtubeId={item.youtubeId} img={item.img} />
            ))}
          </div>
        </section>
        <section className="exams">
          <div className="exams-container">
            <div className="exams-header">
              <h2>Sonuncu hazırlanan imtahanlar</h2>
              <p>Gündəlik planlar, bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevirən mükəmməl bir platformadır</p>
            </div>
            <div className="exams-content">
              {examData.map(exam => (
                <ExamCard key={exam.id} subject={exam.subject} rating={exam.rating} duration={exam.duration} questions={exam.questions} title={exam.title} tags={exam.tags} price={exam.price} butttonText={"İmtahana başla"} isChecked={exam.isChecked} />
              ))}
            </div>
            <div className="exams-content_btn">
              <Link to="/exams" href="">
                daha çox
              </Link>
            </div>
          </div>
        </section>
        <section className="ads">
          <section className="embla2">
            <div className="embla__viewport2" ref={emblaRef}>
              <div className="embla__container2">
                {ads.map((data, index) => (
                  <div className="embla__slide2" key={index}>
                    <div className="embla__slide-container">
                      <img src={data.img} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section className="testimonial-author">
          <Testimonial text={text} color={"white"} bgColor={"rgba(24, 101, 242, 1)"} img={authorStudent} top={-263} right={0} author={"Aytən Əliyeva"} weight={600} fontSize={30} />
        </section>
        <section className="superiority">
          <h2 className="superiority-title">Şagirdlər üçün üstünlüklərimiz</h2>
          <div className="superpriority-items">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-4 text-center">
                <img src={alarmClock} alt="alarmClock" />
                <p>Həftəlik yeni testlər, dərslər və tədris materialları əlavə olunur – daim yenilənən baza.</p>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <img src={medal} alt="medal" />
                <p>İstifadəçilər həm ödənişsiz, həm də ödənişli kurs və test paketlərindən dərin bilik qazana bilər.</p>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <img src={calculator} alt="calculator" />
                <p>İbtidai sinifdən abituriyent hazırlığına qədər müxtəlif fənlər üzrə testlər təqdim olunur.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-author">
          <Testimonial text={text2} color={"white"} bgColor={"rgba(10, 174, 40, 1)"} img={academixChild} top={32} right={0} author={"Academix rəhbərliyi"} weight={600} fontSize={30} />
        </section>
        <section className="pricing-area">
          <div className="pricing-content">
            <h2 className="pricing-content_header">Academix platformasına elə bugün qoşul!</h2>
            <div className="pricing-section">
              <div className="pricing-container">
                {pricingData.map(card => (
                  <PricingCard key={card.id} plan={card.plan} price={card.price} features={card.features} buttonText={card.buttonText} isPrimary={card.isPrimary} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WelcomePage;
