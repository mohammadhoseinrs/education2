import React from 'react'
import Mainbtn from '../../Mainbtn'
import './Homeblog.css'
import post1 from './../../../Assets/images/Home/post-01.jpeg'
import {AiOutlineTags} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {BsArrowLeft} from 'react-icons/bs'

export default function Homeblog() {
  return (
    <section className='homeblog'>
        <section className='homeblog__container'>
            <div className="homeblog__top">
                <div className="homeblog__top__right">
                    <h5>وبلاگ</h5>
                    <h2>بهترین مقالات تخصصی</h2>
                </div>
                <Mainbtn text='لورم ایپسوم' />
            </div>
            <section className='homeblog__inner'>
                <div className="homeblog__inner__item">
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                            <p>
                                لورم ایپسوم
                            </p>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                </div>

                <div className="homeblog__inner__item">
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                            <p>
                                لورم ایپسوم
                            </p>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                </div>

                <div className="homeblog__inner__item">
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                            <p>
                                لورم ایپسوم
                            </p>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>
  )
}
