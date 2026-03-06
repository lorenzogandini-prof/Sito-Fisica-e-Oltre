---
jupyter:
  jupytext:
    cell_metadata_filter: -all
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.19.1
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

## 3.1 Introduzione al Concetto di Massa e Peso

Nel campo della fisica, è fondamentale operare una chiara distinzione tra i concetti di **massa** e **peso**. Sebbene nel linguaggio comune tali termini siano spesso usati in modo intercambiabile, essi descrivono due grandezze fisiche distinte con proprietà e definizioni differenti.

La **massa** (simbolo: _m_) è una proprietà intrinseca e fondamentale di ogni corpo materiale. Essa rappresenta una misura dell'inerzia del corpo, ovvero della sua resistenza a subire una variazione del proprio stato di moto, e della quantità di materia che lo costituisce. In quanto proprietà intrinseca, il valore della massa di un corpo è costante e indipendente da fattori esterni, quali la sua posizione geografica, la presenza di altri corpi o l'azione di forze. La sua natura è scalare e la sua unità di misura nel Sistema Internazionale (SI) è il chilogrammo (kg).

Il **peso** (simbolo: _P_), al contrario, non è una proprietà intrinseca, ma una **forza**. Nello specifico, il peso di un corpo è la forza di attrazione gravitazionale esercitata su di esso da un corpo celeste di massa molto maggiore, come un pianeta o un satellite. Il peso è quindi una grandezza vettoriale che dipende intrinsecamente dal contesto in cui il corpo si trova. Ad esempio, il peso di un oggetto sulla Terra è la forza con cui il pianeta Terra lo attrae, mentre lo stesso oggetto sulla Luna avrebbe un peso differente, poiché sarebbe soggetto all'attrazione gravitazionale lunare. Il peso, in quanto forza, si misura in Newton (N) nel Sistema Internazionale.

## 3.2 La Proporzionalità Diretta tra Massa e Peso

L'obiettivo dell'analisi sperimentale è verificare l'ipotesi secondo cui esista una relazione di **proporzionalità diretta** tra la massa di un corpo e il suo peso. La proporzionalità diretta è la relazione più semplice che può intercorrere tra due grandezze variabili: essa implica che al raddoppiare di una grandezza, anche l'altra raddoppi; al dimezzarsi di una, anche l'altra si dimezzi.

Matematicamente, se due grandezze _P_ (peso) e _m_ (massa) sono direttamente proporzionali, il loro rapporto è costante. Questa relazione può essere espressa attraverso la seguente formula:

$$\frac{P}{m} = g$$

dove _g_ è la **costante di proporzionalità** (di solito si usa la lettera _k_ ma in questo constesto ha una lettera specifica). Ciò significa che, in un dato contesto gravitazionale (ad esempio, sulla superficie terrestre), il rapporto tra il peso misurato di un qualsiasi corpo e la sua massa restituirà sempre lo stesso valore numerico.

### 3.2.1 Rappresentazione Grafica della Proporzionalità Diretta

La relazione di proporzionalità diretta può essere visualizzata efficacemente tramite un grafico cartesiano. Convenzionalmente:

- Sull'**asse delle ascisse (x)** si riporta la **variabile indipendente**, ovvero la grandezza che viene scelta o manipolata nell'esperimento. In questo contesto, la variabile indipendente è la massa (_m_), poiché è una proprietà intrinseca del corpo che non dipende da altre variabili in gioco.
- Sull'**asse delle ordinate (y)** si riporta la **variabile dipendente**, ovvero la grandezza il cui valore è funzione della variabile indipendente. In questo caso, il peso (_P_) è la variabile dipendente, in quanto il suo valore cambia in funzione della massa considerata.  
    Se la relazione tra massa e peso è di proporzionalità diretta, i punti sperimentali (aventi come coordinate le coppie di valori (_m_, _P_) risulteranno allineati lungo una **retta passante per l'origine** degli assi. La pendenza (o coefficiente angolare) di tale retta corrisponde numericamente alla costante di proporzionalità g.

## 3.3 Metodologia Sperimentale

L'esperimento si propone di misurare la massa e il peso di una serie di oggetti per verificare la relazione di proporzionalità e determinare il valore della costante g.

### 3.3.1 Strumentazione

Per la conduzione dell'esperimento sono necessari i seguenti strumenti:

- **Bilancia elettronica**: Utilizzata per la misurazione della massa. Sebbene una bilancia a due piatti misuri la massa per confronto diretto, le bilance elettroniche moderne, comunemente usate in ambito scientifico e domestico, operano misurando una forza (il peso) e convertendola in massa tramite una costante di calibrazione interna. Per gli scopi di questo esperimento, tale strumento è utilizzato per comodità operativa, pur essendo consapevoli del principio di funzionamento indiretto. Le misurazioni della massa sono generalmente fornite in grammi (g) e devono essere convertite nell'unità del Sistema Internazionale, il chilogrammo (kg), per la successiva analisi dei dati (1 kg = 1000 g).
- **Dinamometro**: Strumento utilizzato per la misurazione diretta del peso. Un dinamometro è costituito essenzialmente da una molla elicoidale che si allunga in modo proporzionale alla forza applicata al suo gancio. Un indicatore solidale con la molla si muove lungo una scala graduata, tarata in Newton (N), fornendo una misura diretta dell'intensità della forza. Il funzionamento del dinamometro si basa sul confronto tra la forza elastica della molla e la forza peso applicata.


### 3.3.2 Procedura Operativa

L'esperimento si articola nelle seguenti fasi:

1. **Preparazione dei campioni**: Si predispone un set di masse campione e un supporto per agganciarle. Il supporto stesso possiede una massa e costituisce la prima misurazione. Successivamente, si aggiungono progressivamente altre masse, realizzando un totale di cinque misurazioni distinte per ottenere un numero di punti sufficiente a delineare un andamento grafico affidabile.
2. **Misurazione della massa**: Per ciascuno dei cinque assemblaggi (supporto da solo, supporto + 1 massa, supporto + 2 masse, etc.), si misura la massa totale (_m_) utilizzando la bilancia elettronica. I valori ottenuti, espressi in grammi, vengono registrati e successivamente convertiti in chilogrammi.
3. **Misurazione del peso**: Per ciascuno dei medesimi assemblaggi, si misura il peso (_P_) agganciandolo al dinamometro e leggendo il valore indicato sulla scala in Newton.
4. **Raccolta dati**: I dati vengono organizzati in una tabella, riportando per ogni misurazione la massa in chilogrammi e il corrispondente peso in Newton.

## 3.4 Analisi dei Dati e Interpretazione dei Risultati

| **m [kg]**               | **P [N]**                | **g [N/kg]**             |
| ------------------------ | ------------------------ | ------------------------ |
| <center>$m_{1}$</center> | <center>$p_{1}$</center> | <center>$g_{1}$</center> |
| <center>$m_{2}$</center> | <center>$p_{2}$</center> | <center>$g_{2}$</center> |
| <center>$m_{3}$</center> | <center>$p_{3}$</center> | <center>$g_{3}$</center> |
| <center>$m_{4}$</center> | <center>$p_{4}$</center> | <center>$g_{4}$</center> |
| <center>$m_{5}$</center> | <center>$p_{5}$</center> | <center>$g_{5}$</center> |

Una volta raccolte le coppie di valori (_m_, _P_), si procede all'analisi quantitativa.

### 3.4.1 Calcolo della Costante di Proporzionalità

Per ogni coppia di dati sperimentali, si calcola il rapporto _P/m_. A causa di errori sperimentali inevitabili — dovuti alla sensibilità degli strumenti, a imprecisioni nella lettura o ad altri fattori aleatori — i valori calcolati per la costante _k_ risulteranno verosimilmente leggermente diversi l'uno dall'altro. Per ottenere una stima unica e rappresentativa della costante, si calcola la **media aritmetica** ($\bar{g}$) dei valori ottenuti:

$$\bar{g} = \frac{g_1 + g_2 + … + g_n}{n}$$

dove _n_ è il numero di misurazioni effettuate (in questo caso 5).  
Il valore teorico atteso per questa costante, nota come **accelerazione di gravità terrestre (g)**, è approssimativamente **9,81 N/kg**. Il valore medio sperimentale k̄ va confrontato con questo valore di riferimento per valutare l'accuratezza dell'esperimento.

### 3.4.2 Stima dell'Errore Sperimentale

Un risultato numerico privo di un'indicazione del suo margine di incertezza ha un significato limitato. È pertanto necessario calcolare l'errore associato alla stima della costante. Un metodo semplice per stimare l'incertezza è il calcolo della **semidispersione massima**. Questo errore ($\Delta g$) si calcola come la semidifferenza tra il valore massimo ($g_{max}$) e il valore minimo


$$\Delta g = \frac{g_{\text{max}} - g_{\text{min}}}{2}$$

Il risultato finale dell'esperimento viene quindi espresso nella forma:  

 $$g=\bar{g} \pm \Delta g$$  

Questo intervallo rappresenta il range di valori entro cui, con un certo grado di fiducia, si trova il valore reale della costante di proporzionalità. Si può quindi verificare se il valore teorico di 9,81 N/kg ricade all'interno di questo intervallo sperimentale.

### 3.4.3 Analisi Grafica

Si realizza un grafico cartesiano riportando la massa _m_ (in kg) sull'asse delle ascisse e il peso _P_ (in N) sull'asse delle ordinate. È fondamentale che il grafico sia disegnato in scala, scegliendo unità di misura adeguate per entrambi gli assi in modo da sfruttare al meglio lo spazio disponibile e garantire una corretta visualizzazione dei dati.  
Si riportano i punti sperimentali sul grafico. L'analisi visiva del grafico permette di trarre conclusioni qualitative:

- Se i punti si dispongono approssimativamente lungo una linea retta, l'ipotesi di proporzionalità diretta è corroborata.
- Si può tracciare la "retta di migliore approssimazione" che passa il più vicino possibile a tutti i punti. Se tale retta passa anche per l'origine degli assi (o molto vicino ad essa), l'ipotesi di proporzionalità diretta è ulteriormente confermata.

## 3.5 Conclusioni

La fase conclusiva dell'analisi consiste nel sintetizzare i risultati ottenuti e rispondere alle domande iniziali dell'esperimento.

1. **Verifica della proporzionalità diretta**: Sulla base dell'allineamento dei punti nel grafico e della costanza (entro i margini di errore) del rapporto _P/m_, si stabilisce se l'ipotesi di proporzionalità diretta tra massa e peso è stata verificata con successo.
2. **Determinazione della costante**: Si riporta il valore sperimentale della costante di proporzionalità, completo del suo errore ($g=\bar{g} \pm \Delta g$).
3. **Valutazione dei risultati**: Si confronta il risultato ottenuto con il valore teorico dell'accelerazione di gravità (g ≈ 9,81 N/kg). Si discute l'accuratezza e la precisione dell'esperimento, valutando se l'errore calcolato (Δg) è "accettabile" o "basso" in relazione alla strumentazione utilizzata e alle condizioni operative. Si analizzano le possibili cause di discrepanza tra il valore sperimentale e quello teorico, riconducendole a errori sistematici o casuali.  

    In sintesi, un esperimento ben riuscito dimostrerà che il peso è direttamente proporzionale alla massa e fornirà una stima dell'accelerazione di gravità terrestre coerente, entro i limiti dell'errore sperimentale, con il valore universalmente accettato.
