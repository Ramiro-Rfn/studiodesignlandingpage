import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type TestemonialData = {
        id: number,
        name: string;
        content: string;
        image: string;
}[]


export function Slider() {
    const testemonialData: TestemonialData = [
        {
            id: 1,
            name: 'Gilson Mutaca',
            content: 'Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.',
            image: 'gilson.jpg'
        },

        {
            id: 2,
            name: 'Rosimira Francisco',
            content: 'Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high.',
            image: 'rosa.png'
        },

        {
            id: 3,
            name: 'Fábio André',
            content: 'Amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.',
            image: 'fabio.png'
        },

        {
            id: 4,
            name: 'Ramiro Francisco Nzau',
            content: 'Font-end developer, with Html, css, javascript, reactjs, nextjs, react-native, with 1 year of experience ',
            image: 'ramiro.png'
        },
    ]

    const [activeId, setActiveId] = useState(1);

    useEffect(()=>{
        console.log(activeId)
        let timeOut = setTimeout(()=>{
            if(activeId === testemonialData.length) {
                setActiveId(1)
                return
            }
            setActiveId(activeId + 1);
       }, 3000)

    },[activeId])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    {
                        testemonialData.map((testemonial)=>{
                            return (
                                <img className={testemonial.id === activeId ? styles.active: ''}  src={`assets/${testemonial.image}`} alt="" />
                            )
                        })
                    }
                </div>

                <div className={styles.info}>
                    <div className={styles.slide}>
                        {testemonialData.map((testemonial)=>{
                            return (
                                <div key={testemonial.id} className={`${styles.content} ${ testemonial.id == activeId ? styles.active: ''}`}>
                                    <h4>{testemonial.name}</h4>

                                    <p>{testemonial.content}</p>
                                </div>
                            )
                        })}                    
                    </div>
                    

                    <div className={styles.dots}>
                        {testemonialData.map((_, index)=>{
                            return (
                                <div className={`${styles.dot} ${index +1 === activeId ? styles.active: ''}`}>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.one}>

                </div>

                <div className={styles.two}>

                </div>


                <div className={styles.three}>

                </div>

                <div className={styles.four}>

                </div>

                <div className={styles.five}>

                </div>

                <div className={styles.six}>
                    
                </div>

                <div className={styles.seven}>
                    
                </div>

                <div className={styles.eight}>
                    
                </div>
            </div>
        </div>
    )
}