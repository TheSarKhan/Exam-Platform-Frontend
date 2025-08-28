/* eslint-disable no-unused-vars */
import Testimonial from "../../components/Testiomonial/Testimonial";
import "../../assets/css/embla.css";
import "./AboutPage.css";
import childBoy from "../../assets/images/child-boy.png";
import sketching from "../../assets/icons/sketching.png";
import cap from "../../assets/icons/graduation-cap.png";
import notebook from "../../assets/icons/notebook.png";
import education from "../../assets/icons/education.png";
import onlineLearning from "../../assets/icons/online-learning.png";
import tablet from "../../assets/icons/tablet.png";
import useEmblaCarousel from "embla-carousel-react";
import { testimonialData } from "../../staticDatas/sliderDatas";
import PricingCard from "../../components/PricingCard/PricingCard";
import { pricingData } from "../../staticDatas/pricingData";

function About() {
  const text = `Biz gələcəyin bacarıqlı və yaradıcı fərdlərini yetişdirmək məqsədilə yaradılmış müasir bir təhsil platformasıyıq. Məqsədimiz — hər kəsin bilik və bacarıqlara asan, keyfiyyətli və davamlı şəkildə çıxışını təmin etməkdir.
Platformamız innovativ yanaşmanı, praktik öyrənməni və şagird-müəllim interaktivliyini ön planda tutur. Burada istənilən yaş və səviyyəyə uyğun fənlər, fərdi və qrup dərsləri, peşəkar müəllim heyəti və daim yenilənən resurslar təqdim olunur, peşəkar müəllim heyəti və daim yenilənən resurslar təqdim olunur`;
  const options = { containScroll: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <>
      <div className="container">
        <div className="about">
          <h1>Biz kimik?</h1>
          <Testimonial text={text} color={"white"} bgColor={"rgba(24, 101, 242, 1)"} img={childBoy} top={-327} right={0} />
          <section className="superiority">
            <h2 className="superiority-title">Müəllimlər üçün üstünlüklərimiz</h2>
            <div className="superpriority-items">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={cap} alt="cap" />
                  <p>Həftəlik yeni testlər, dərslər və tədris materialları əlavə olunur – daim yenilənən baza.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={notebook} alt="notebook" />
                  <p>İbtidai sinifdən abituriyent hazırlığına qədər müxtəlif fənlər üzrə testlər təqdim olunur.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={sketching} alt="sketching" />
                  <p>İstifadəçilər həm ödənişsiz, həm də ödənişli kurs və test paketlərindən dərin bilik qazana bilər.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {testimonialData.map(data => (
                  <div className="embla__slide" key={data.id}>
                    <Testimonial text={data.text} color={data.color} bgColor={data.bgColor} img={data.img} top={data.top} right={data.right} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="superiority">
            <h2 className="superiority-title">Şagirdlər üçün üstünlüklərimiz</h2>
            <div className="superpriority-items">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={education} alt="onlineLearning" />
                  <p>Həftəlik yeni testlər, dərslər və tədris materialları əlavə olunur – daim yenilənən baza.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={onlineLearning} alt="onlineLearning" />
                  <p>İbtidai sinifdən abituriyent hazırlığına qədər müxtəlif fənlər üzrə testlər təqdim olunur.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <img src={tablet} alt="tablet" />
                  <p>İstifadəçilər həm ödənişsiz, həm də ödənişli kurs və test paketlərindən dərin bilik qazana bilər.</p>
                </div>
              </div>
            </div>
          </section>
          <section>
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
      </div>
    </>
  );
}

export default About;
