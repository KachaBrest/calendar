'use strict';

class LikeButton extends React.Component {
    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        let dayNames = ['Пн', 'Вт','Ср', 'Чт','Пт', 'Сб', 'Вс'];
        let cal = [...Array(35)];
        let time = [...Array(5)];

        return (
            <div className={'counteiner'}>
                <div className={'blockName'}>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0344 7.99219C21.9875 7.80469 21.8938 7.65625 21.7531 7.54688C21.6125 7.4375 21.4406 7.35156 21.2375 7.28906L14.8391 6.39844L11.9328 0.609375C11.7922 0.25 11.4953 0.0703125 11.0422 0.0703125C10.5891 0.0703125 10.2922 0.25 10.1516 0.609375L7.24531 6.30469L0.940625 7.28906C0.7375 7.28906 0.561719 7.35938 0.413281 7.5C0.264844 7.64062 0.14375 7.80469 0.05 7.99219C-0.0125 8.19531 -0.0164062 8.39062 0.0382812 8.57812C0.0929687 8.76562 0.190625 8.90625 0.33125 9L4.94844 13.5L3.84687 19.8984C3.8 20.1016 3.81562 20.293 3.89375 20.4727C3.97187 20.6523 4.08906 20.7969 4.24531 20.9062C4.38594 21 4.55391 21.0625 4.74922 21.0938C4.94453 21.125 5.14375 21.0938 5.34687 21L11.0422 18L16.7375 21C16.8469 21 16.9328 21 16.9953 21C17.0578 21 17.1438 21 17.2531 21C17.3469 21 17.4445 20.9805 17.5461 20.9414C17.6477 20.9023 17.7453 20.8516 17.8391 20.7891C17.9953 20.6953 18.1125 20.5586 18.1906 20.3789C18.2688 20.1992 18.2844 20.0078 18.2375 19.8047L17.1359 13.4062L21.7531 8.90625C21.8938 8.79688 21.9914 8.65625 22.0461 8.48438C22.1008 8.3125 22.0969 8.14844 22.0344 7.99219ZM15.3313 12.3984C15.2375 12.5547 15.1672 12.707 15.1203 12.8555C15.0734 13.0039 15.05 13.1484 15.05 13.2891L15.8469 18.2109L11.4406 15.8906C11.2844 15.7969 11.132 15.75 10.9836 15.75C10.8352 15.75 10.6906 15.7969 10.55 15.8906L6.14375 18.2109L7.03437 13.2891C7.03437 13.1484 7.01094 13.0039 6.96406 12.8555C6.91719 12.707 6.84687 12.5547 6.75312 12.3984L3.14375 9L8.04219 8.29688C8.19844 8.29688 8.34687 8.23828 8.4875 8.12109C8.62812 8.00391 8.74531 7.89844 8.83906 7.80469L11.0422 3.30469L13.2453 7.71094C13.2922 7.85156 13.3859 7.96875 13.5266 8.0625C13.6672 8.15625 13.8391 8.20312 14.0422 8.20312L18.9406 8.90625L15.3313 12.3984Z" fill="#C10037"/>
                    </svg>
                    <h3>Бронирование экскурсии</h3>
                </div>
                <div className={'block'}>
                    <div className={'info'}>
                        <div className={'checkPerson'}>
                            <h3>Выберите посещение</h3>
                            <div>
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault1" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Частное посещение
                                    </label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Корпоративное
                                        посещение
                                    </label>
                            </div>
                        </div>
                        <div className={'checkTimes'}>
                            <h3>Выберите время</h3>
                            <div className={'checkTime'}>
                                {time.map((index,time) =>
                                    <p>{time}</p>)}
                            </div>
                        </div>
                        <button><p>Забронировать</p></button>
                    </div>
                    <div className={'calendar'}>
                        <div className={'calMounth'}>
                            <div>Месяц + год</div>
                            <div>
                                <img src="" alt="пред месяц"/>
                                <img src="" alt="след месяц"/>
                            </div>
                        </div>
                        <div className={'calBlock'}>
                            <div className={'days'}>
                                {dayNames.map(day => <p>{day}</p>)}
                            </div>
                            <div className={'calDays'}>
                                {cal.map((index,day) => <p>{day}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
    }

    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);