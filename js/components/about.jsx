import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="about_container container-grid">
                        <div className="col-6 about_holder_text">
                            <p className="about_text">
                                Cześć! <br/>
                                Tu Katarzyna i lubię rysować.<br/>
                                Wiem, że masz do niej słabość. Ona czuje to samo.<br/>
                                Ona uwielbia Cię bardziej niż uwielbia czekoladę!<br/>
                                Uważa, że ​​jesteś fantastyczna, aż do szpiku kości – bo jesteś! <br/>
                                Ta kobieta, ta boska istota – całkowicie łapie za serce. Nie zmusza, nie trzyma zbyt
                                mocno ani nie miażdży Twoich trzepoczących skrzydeł. Pozwala Ci być. Pozwala wstać i
                                upaść na swój sposób.<br/>
                                Ta kobieta, ta magiczna kobieta – łagodzi ból poprzez uśmiech. A wystarczy jej do tego
                                kilka krzywych kresek na papierze. Jej obraz jest uzdrawiający i wciągający jak…
                                narkotyk. <br/>
                                Wystarczy ją tylko znaleźć. <br/>
                                W sobie lub tuż obok.<br/>
                                Uczcij tę uroczą damę w swoim życiu – spraw, aby poczuła się jak bogini. <br/>
                                Bo chociaż ona wie, że jest boginią – zapomniała. Jest smutna i przestraszona – i tonie
                                w morzu nigdy nie kończących się list zadań i czarnych obłoków niepewności. <br/>
                                Uprzejmie przypominam o jej pięknej duszy i świętym ogniu, który w niej płonie! <br/>
                                <hr/>
                                    And God said, “it is good, she and I will dance.”
                            </p>
                        </div>
                        <div className="col-6 about_holder_img">
                            <img className="about_img" src="./img/about.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export {About}