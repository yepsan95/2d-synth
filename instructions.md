## Material

### Texturas a1:
- Reflexivo: busca sonoridades que cambian lentamente, disfrutando cada textura, sin apuro. 
- Meticuloso: busca sonidos cortos y muy minuciosos, guardando silencio cuando se requiera.
- Neurótico: busca la mayor variedad sonora, no le teme al cambio ni a lo imprevisto.

### Texturas a2:
- Grave y agudo: sonidos largos con sustain que juegan en diferentes registros. Procesos: delay, reverb, pitch shifter y ring modulation.
- Seco y reverberado:  sonidos cortos y  semicortos, uno crudo y el otro procesado. Procesos: delay, reverb.
- Puro y ruidoso: sonidos largos y semilargos. Uno juega con sonidos más puros, y el otro con sonidos más ruidosos. El segundo debe contrlar su volumen para que el primero se pueda percibir.

### Texturas a3:
- Complementación: los 3 buscan una misma frecuencia u octavas y hacen ligeras variaciones sobre ella. Predominan los sonidos largos y sin pausa.
- Imitación: se define un orden (ejemplo: 1, 2 y 3). El 1 lanza un sonido, luego el 2 trata de imitarlo, luego el 3 trata de imitar al 2. Después de cada ronda, el 1 puede proponer un sonido diferente, o imitar al último sonido del 3. Predominan los sonidos cortos o semi-cortos.
- Divergencia: cada uno hace cosas diferentes, tratando de escucharse mutuamente y no interrumpirse. Predominan sonidos cortos y largos, que pueden tender al ruido y al caos.

## Orden

| Laptop 1            | Laptop 2             | Laptop 3            |
|                     |                      |                     |
|------------------------------------------------------------------|
|                                                                  |
|                              <--A-->                             |
|                            Consonancia.                          |
|                                                                  |
|                                                                  |
| 00:00               | 00:00                | 00:00               |
|                     |                      |                     |
| osc1~               |                      |                     |
| freq: 30 - 50       |                      |                     |
| vol: 0% => 50%      |                      |                     |
|      cresc. slowly  |                      |                     |
| (con Shift)         |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| FREQ. MODULATION    |                      |                     |
| left oscillator     |                      |                     |
| envelope: open      |                      |                     |
| freq: grave         |                      |                     |
| (con Shift)         |                      |                     |
|                     |                      |                     |
| BUSCAR CONSONANCIA  |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| Vibrato             |                      |                     |
|                     |                      |                     |
| MANTENER            |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 01:00               | 01:00                | 01:00               |
|                     |                      |                     |
|                     | FREQ. MODULATION     |                     |
|                     | both oscillators     |                     |
|                     | envelope: open       |                     |
|                     | freq: grave          |                     |
|                     | (con Shift)          |                     |
|                     |                      |                     |
|                     | BUSCAR CONSONANCIA   |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     | Vibrato              |                     |
|                     |                      |                     |
|                     | MANTENER             |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | PHASE MODULATION    |
|                     |                      | left oscillator     |
|                     |                      | envelope: open      |
|                     |                      | freq: grave         |
|                     |                      | (con Shift)         |
|                     |                      |                     |
|                     |                      | BUSCAR CONSONANCIA  |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | Vibrato             |
|                     |                      |                     |
|                     |                      | MANTENER            |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 02:00               | 02:00                |  02:00              |
|                     |                      |                     |
| osc1~               |                      |                     |
| freq: => 0          |                      |                     |
|      slowly         |                      |                     |
| (con Shift)         |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| FREQ. MODULATION    |                      |                     |
| left oscillator     |                      |                     |
| freq: => 0          |                      |                     |
|      slowly         |                      |                     |
| (con Shift)         |                      |                     |
|                     |                      |                     |
| envelope: closed    |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| DELAY               | FREQ. MODULATION     | DELAY               |
| position:           | both oscillators     | position:           |
|     ___________     | freq: => 0           |     ___________     |
|    |          |     |      slowly          |    |          |     |
|    |          |     | (con Shift)          |    |          |     |
|    |██████    |     |                      |    |██████    |     |
|    |██████    |     | envelope: closed     |    |██████    |     |
|    |██████____|     |                      |    |██████____|     |
|     (aleatory)      |                      |     (aleatory)      |
|                     |                      |       slowly        |
|                     |                      | (con Shift)         |
|                     |                      |                     |
|                     |                      |                     |
|                     | DELAY                |                     |
|                     | position:            |                     |
|                     |     ___________      |                     |
|                     |    |          |      | PHASE MODULATION    |
|                     |    |          |      | left oscillator     |
|                     |    |██████    |      |                     |
|                     |    |██████    |      | envelope:  closed   |
|                     |    |██████____|      | TRIGGER ENVELOPE    |
|                     |     (aleatory)       | attack: short       |
|------------------------------------------------------------------|
|                                                                  |
|                              <--B-->                             |
|                             Imitación.                           |
|                                                                  |
|                                                                  |
|  Laptop 1:            Laptop 2:      	      Laptop 3:            |
|  envía un sonido.     intenta imitar el     intenta imitar el    |
|                       sonido anterior.      sonido anterior.     |
|                                                                  |
|                                                                  |
|    Dejar un espacio de 4 - 6 segundos después de cada sonido.    |
|                                                                  |
|       Si en algún momento la imitación se vuelve monótona,       |
|                   proponer un nuevo sonido.                      |
|                                                                  |
|                                                                  |
|                               03:00                              |
|                                                                  |
|                            Materiales:                           |
|                         FREQ. MODULATION                         |
|                         PHASE MODULATION                         |
|                            ENVELOPES                             |
|                              DELAY                               |
|                              PANEO                               |
|                                                                  |
|                             Textura:                             |
|                         Sutil, espaciada.                        |
|                     Evitar sonidos muy fuertes.                  |
|                                                                  |
|                                                                  |
|                                                                  |
|                               04:00                              |
|                                                                  |
|    Dejar un espacio de 2 - 4 segundos después de cada sonido.    |
|                                                                  |
|                            Materiales:                           |
|                         Todo lo anterior +                       |
|                          RING MODULATION                         |
|                            PITCH SHIFT                           |
|                                                                  |
|                             Textura:                             |
|                Un poco más agitada, menos espaciada.             |
|                 Incluir sonidos un poco más fuertes.             |
|                                                                  |
|                                                                  |
|                                                                  |
|                               05:00                              |
|                                                                  |
|    Dejar un espacio de 0 - 2 segundos después de cada sonido.    |
|                                                                  |
|            Los sonidos pueden comenzar incluso antes             |
|             que el anterior haya terminado de sonar.             |
|                                                                  |
|                            Materiales:                           |
|                         Todo lo anterior +                       |
|                              REVERB                              |
|                                                                  |
|                             Textura:                             |
|                       Agitada, precipitada.                      |
|                      Incluir sonidos fuertes.                    |
|                                                                  |
|                                                                  |
|                  Laptop 3 lanza el último sonido.                |
|                                                                  |
| ---------------------------------------------------------------- |
|                                                                  |
|                              <--C-->                             |
|                           Improvisación.                         |
|                                                                  |
|                                                                  |
| 06:00               | 06:00                | 06:00               |
|                     |                      |                     |
|                     | osc2~                |                     |
|                     | freq:  30 - 50       |                     |
|                     | harm1: 11            |                     |
|                     | harm2: 7             |                     |
|                     | vol: 0% => 50%       |                     |
|                     |      cresc. slowly   |                     |
|                     | (con Shift)          |                     |
|                     |                      |                     |
|                     |                      |                     |
| Improvisar con      |                      |                     |
| todos los           |                      |                     |
| parámetros.         |                      |                     |
| (Excepto            |                      |                     |
|  osciladores)       |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 07:00               | 07:00                | 07:00               |
|                     |                      |                     |
|                     | Improvisar con       |                     |
|                     | todos los            |                     |
|                     | parámetros.          |                     |
|                     | (Excepto             |                     |
|                     |  osciladores)        |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 08:00               | 08:00                | 08:00               |
|                     |                      |                     |
|                     |                      | osc4~               |
|                     |                      | freq: 1 - 10        |
|                     |                      | vol: 0% => 100%     |
|                     |                      |      cresc. slowly  |
|                     |                      | (con Shift)         |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | Improvisar con      |
|                     |                      | todos los           |
|                     |                      | parámetros.         |
|                     |                      | (Incluído osc4~)    |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | MANTENER RUIDO      |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 08:30               | 08:30                | 08:30               |
|                     |                      |                     |
|                     |                      | osc4~               |
|                     |                      | freq: => 100 - 150  |
|                     |                      |          slowly     |
|                     |                      | (con Shift)         |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 09:00               | 09:00                | 09:00               |
|                     |                      |                     |
| MAYOR CANTIDAD DE   | MAYOR CANTIDAD DE    | MAYOR CANTIDAD DE   |
| RUIDO POSIBLE       | RUIDO POSIBLE        | RUIDO POSIBLE       |
| (Recomendable       | (Recomendable        | (Recomendable       |
|  jugar con          |  jugar con           |  jugar con          |
|  REVERB y PANEO)    |  REVERB y PANEO)     |  REVERB y PANEO)    |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 09:30               | 09:30                | 09:30               |
|                     |                      |                     |
| VOLUMEN GENERAL: 0  | VOLUMEN GENERAL: 0   | VOLUMEN             |
| (ABRUPTO)           | (ABRUPTO)            | SECUNDARIO: 0       |
|                     |                      | (USAR SLIDER 2D     |
|                     |                      |  NO USAR            |
|                     |                      |  VOLUMEN GENERAL)   |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | osc4~               |
|                     |                      | freq: => 150 - 1000 |
|                     |                      |          IMPROVISAR |
|                     |                      | (sin Shift)         |
|                     |                      | Evitar llevar la    |
|                     |                      | frecuencia a 0      |
|                     |                      | hasta el final      |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      |                     |
| 10:00               | 10:00                | 10:00               |
|                     |                      |                     |
|                     |                      | osc4~               |
|                     |                      | freq: 0             |
|                     |                      | (ABRUPTO)           |
|                     |                      |                     |
|                     |                      |                     |
|                     |                      | VOLUMEN GENERAL: 0  |
--------------------------------------------------------------------

							    FIN
