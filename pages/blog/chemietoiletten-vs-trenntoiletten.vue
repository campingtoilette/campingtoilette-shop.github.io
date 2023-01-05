<template>
    <div>
        <BlogHeader :buttonText="article.buttonText" :image="article.image" :title="article.title"
            :subtitle="article.subtitle" />

        <div class="container-xxl py-5" id="article">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-12 fadeInUp" style="min-height: 400px">
                        <div class="section-title bg-white text-start text-primary pe-3">
                            {{ article.date }}
                        </div>

                        <section>
                            <h1 class="mb-4">Trenntoilette vs. Chemietoilette: Welche Toilette ist besser?
                            </h1>

                            <p class="mb-4">
                                Einige Camper bevorzugen eine Chemietoilette, während andere auf Trenntoiletten
                                schwören. Wir stellen die Vor- und Nachteile der beiden Toilettensysteme vor.
                            </p>

                            <p class="mb-4">Die Toilette ist bei vielen Campern ein großes Thema, um auch abseits von
                                Campingplätzen frei und unabhängig zu sein. Viele Jahre lang hatten Chemietoiletten die
                                Nase vorne, weil sie einfach bekannter waren. Allerdings sind sie aufgrund der
                                eingesetzten Chemie einerseits nicht umweltfreundlich und andererseits umständlich, was
                                die Entleerung und Entsorgung angeht . Hier scheinen Trenntoiletten die Oberhand zu
                                gewinnen, weil sie mit einfacher Handhabung und hohem Umweltbewusstsein gleich doppelt
                                punkten können.
                            </p>

                            <h2 class="h1">
                                Was ist eine Chemietoilette?
                            </h2>

                            <p class="mb-4">Chemietoiletten gehören zu den bekanntesten Campingtoiletten. Sie bestehen
                                im Wesentlichen aus einem großen (mit Wasser gefüllten) Tank, um sowohl die flüssigen
                                als auch die festen Ausscheidungen aufzufangen. Vor dem Gebrauch wird dem Tank eine
                                chemische Lösung beigefügt. Sie trägt dazu bei, die festen Ausscheidungen zu zersetzen
                                und unangenehmen Gerüchen vorzubeugen. Zwischen der Toilettenbrille und dem Tank
                                befindet sich noch ein Frischwassertank, um die Ausscheidungen wegzuspülen.</p>

                            <h3 class="h1">Welche Vorteile hat eine Chemietoilette?</h3>

                            <p class="mb-4">Chemietoiletten sind einfach im Gebrauch: Einfach auf die Toilette setzen,
                                ziehen, fertig. Nutzung und Optik sind der heimischen Toilette sehr ähnlich, daneben
                                lässt sich der Füllstand dank einer Anzeige ablesen. Durch die zugesetzte Chemie kann
                                die Toilette selbst in kleinen Räumen, beispielsweise in einem Camper-Van, ohne
                                Anschlüsse betrieben werden. Die Bedienung funktioniert ganz ohne Strom, wobei sich eine
                                Chemietoilette bei Bedarf mit einem Wasseranschluss für die Wasserzufuhr kombinieren
                                lässt.</p>


                            <h4 class="h1">Welche Nachteile hat eine Chemietoilette?</h4>

                            <p class="mb-4">Auch wenn sich bei einer Chemietoilette keine typischen Toilettengerüche
                                bilden sollen, wird der Geruch des chemischen Zusatzes selbst häufig als unangenehm
                                empfunden. Der Einsatz von chemischen Mitteln ist überdies alles andere als
                                umweltfreundlich. Auch ist die Entleerung schwierig: Sie darf nämlich nur an einer
                                Entsorgungsstation erfolgen, wobei die Entsorgung der zersetzten Stoffe recht
                                unappetitlich ist. Außerdem ist der volle Tank sehr schwer, daneben müssen die Kosten
                                für den chemischen Zusatz einkalkuliert werden.</p>

                            <h4 class="h1">Was ist eine Trenntoilette?</h4>

                            <p class="mb-4">Eine Trenntoilette arbeitet mit zwei Behältern, um feste und flüssige
                                Ausscheidungen sauber zu trennen. Auch wenn sie ohne Chemie auskommt, bilden sich bei
                                dieser Toilette aufgrund der Trennung von Kot und Urin keine unangenehmen Gerüche,
                                weshalb sie als Campingtoilette eine echte Alternative zur Chemietoilette ist.</p>

                            <h5 class="h1">Welche Vorteile hat eine Trenntoilette?</h5>

                            <p class="mb-4">Dass feste und flüssige Ausscheidungen in verschiedenen Behältern
                                aufgefangen und sauber voneinander getrennt werden, ist ein großer Vorteil. Dadurch
                                können Gerüche vermieden werden, die durch Bakterien, Pilze und den im Urin enthaltenen
                                Ammoniak entstehen können. Über die festen Ausscheidungen wird lediglich etwas
                                <nuxt-link to="/zubehoer/einstreu/"
                                    title="Einstreu für Campingtoiletten">Einstreu</nuxt-link>
                                (Sägespäne, Kokosfasern, Rindenmulch) gegeben, um die Feuchtigkeit besser zu binden –
                                ganz ohne Strom und Wasser.
                            </p>

                            <p class="mb-4">Weiterer Vorteil: Sobald die Toilette voll ist, können die Feststoffe
                                entweder in den Restmüll oder Kompost gegeben werden. Abfalltüten erleichtern die
                                Entsorgung enorm. Der Urin wird über eine herkömmliche Toilette entsorgt. Alternativ
                                kann er verdünnt in den Garten (oder die Natur) geschüttet werden. Trenntoiletten sind
                                demzufolge nicht nur umweltfreundlich – sie tragen auch dazu bei, dass man in Sachen
                                Toilettennutzung immer und überall unabhängig ist.</p>

                            <p class="mb-4">Toiletten aus Kunststoff, wie zum Beispiel die Trenntoilette <nuxt-link
                                    to="/trobolo-wandago/" title="TROBOLO WandaGO">TROBOLO
                                    WandaGO</nuxt-link>
                                und <nuxt-link to="/trelino-evo-s/" title="Trelino EVO S">Trelino EVO S</nuxt-link>,
                                können beim Camping und Co. nicht nur mit einer einfachen Handhabung,
                                sondern auch mit Robustheit und geringem Gewicht überzeugen.
                            </p>

                            <p class="h1">Welche Nachteile hat eine Trenntoilette?</p>

                            <p class="mb-4">Trenntoiletten sind etwas teurer in der Anschaffung und auch hier fallen
                                laufende Kosten für Mülltüten und Einstreu an. Die laufenden Kosten sind jedoch in einem
                                überschaubaren Rahmen. In der Langzeitanwendung sind Trenntoiletten deshalb häufig
                                günstiger als Chemietoiletten.</p>

                            <p class="h1 mb-4 pt-4">Fazit: Trenntoilette oder Chemietoilette – welche ist besser?</p>

                            <p class="mb-4">Chemietoiletten sind zwar günstig, allerdings sind sie aufgrund des
                                chemischen Zusatzes alles andere als umweltfreundlich und auch die Entleerung gestaltet
                                sich eher schwierig. Bei Entleerung und Entsorgung schneiden Trenntoiletten besser ab:
                                Trenntoiletten lassen sich ohne Chemie betreiben und erlauben eine flexible Entsorgung,
                                während Chemietoiletten an einer Entsorgungsstation entleert werden müssen.</p>

                        </section>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-6 offset-lg-3">
                        <nuxt-link class="btn btn-lg btn-primary py-3 px-5 d-block" to="/kategorie/campingtoilette/"
                            title="Campingtoilette kaufen"><span class="h1" style="color: #fff">Campingtoiletten
                                ansehen</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "/assets/data/config.json"

export default {
    name: "ChemietoilettenVSTrenntoiletten",
    head: {
        title: "Chemietoiletten vs. Trenntoiletten",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "In unserem Blog Beitrag vergleichen wir Chemietoiletten mit Trenntoiletten und zählen die Vor- und Nachteile beider Systeme auf."
            },
            {
                hid: "robots",
                name: "robots",
                content: "index, follow"
            }
        ]
    },
    data() {
        return {
            article: config.blogArticles.find((article) => article.title === "Chemietoiletten vs. Trenntoiletten")
        }
    }
}
</script>
