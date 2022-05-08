import React from 'react'
import './CourseDetailMain.css'
import course2 from './../../../Assets/images/coursedetail/course-02.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-1.jpeg'
import {AiFillStar} from 'react-icons/ai'
export default function CourseDetailMain() {
  return (
    <section className="cdm">
        <section className='cdm__container'>
            <div className="cdm__image">
                <img src={course2} alt="" />
            </div>
            <section className="cdm__inner">
                <section className='cdm__inner__right'>
                    <div className="cdm__inner__right__inner">

                        <div className="cdm__inner__right__inner__top">
                            <div className="cdm__inner__right__inner__top__right">
                                <div className="cdm__inner__right__inner__top__right__image">
                                    <img src={instructor1} alt="" />
                                </div>
                                <p>توسط محمدرضا داوری</p>
                            </div>
                            <div className="cdm__inner__right__inner__top__left">
                                <div className="cdm__inner__right__inner__top__left__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className="cdm__inner__right__inner__top__left__suggets">
                                    (۴۷ نظر)
                                </div>
                            </div>
                        </div>


                        <div className="cdm__inner__right__inner__title">
آموزش Reactjs راکت به شما کمک می‌کند به شکل جامع React را یاد بگیرید
                        </div>

                        <div className="cdm__card">
                            <h5>توضیحات</h5>
                            <p>لاراول 9 یک وب فریمورک رایگان و متن باز مبتنی بر PHP است که برای اولین بار در سال ۲۰۱۱ توسط Taylor Otwell ساخته شد. هدف از ایجاد لاراول، داشتن چهارچوبی مناسب برای ایجاد اپلیکیشن‌های مبتنی بر طراحی MVC یا Model-View-Controller بوده و باید گفت که لاراول بخوبی این وظیفه را انجام می‌دهد</p>
                            <p>شاید برای‌تان نیز این نکته جالب باشد که کل معماری MVC این فریمورک براساس فریمورک سمفونی یا Symfony ایجاد شده است. ما در وبسایت آموزشی راکت تلاش‌های بسیار زیادی را برای آموزش لاراول بعمل آورده‌ایم و هم اکنون نیز این تلاش‌ها ادامه دارند. برای مشاهده کامل آموزش‌های لاراول می‌توانید به «یادگیری لاراول» مراجعه کنید</p>
                            <h5>پس از اتمام دوره چه چیزهایی کسب می‌کنید؟</h5>
                            <ul>
                                <li>پشتیبانی و پاسخ به پرسش های شما</li>
                                <li>کسب امتیاز و اعتبار برای شرکت در دوره های دیگر</li>
                                <li>دریافت آپدیت های دوره به صورت مادامالعمر (در صورت خریداری نقدی این دوره)</li>
                                <li>توانایی کسب درآمد و گرفتن پروژه های واقعی</li>
                            </ul>
                            <h5>مدرک</h5>
                            <p>Reactjs به عنوان یک ابزار جاوااسکریپتی با هدف ایجاد وبسایت‌های SPA شناخته می‌شود که شما با استفاده از آن می‌توانید خیلی راحت چنین وبسایت‌های ایجاد کنید. در دوره آموزش Reactjs ما سعی داریم شما را قدم به قدم با این ابزار جذاب آشنا کنیم و به شما یاد دهیم که چطور می‌توان از React برای ایجاد وبسایت‌های SPA استفاده کرد</p>
                        </div>

                        <div className="cdm__videocard">
                            
                        </div>
                    </div>
                </section>
                <section className='cdm__inner__left'>
                    
                </section>
            </section>
        </section>
    </section>
  )
}
