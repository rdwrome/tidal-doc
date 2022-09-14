(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),l=(n(0),n(217)),r={title:"Audio effects",id:"audio_effects"},b={unversionedId:"reference/audio_effects",id:"reference/audio_effects",isDocsHomePage:!1,title:"Audio effects",description:"Basic effects",source:"@site/docs/reference/effects.md",slug:"/reference/audio_effects",permalink:"/docs/reference/audio_effects",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/effects.md",version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1661938075,sidebar:"reference",previous:{title:"Synthesizers",permalink:"/docs/reference/synthesizers"},next:{title:"Controls",permalink:"/docs/reference/controls"}},c=[{value:"Basic effects",id:"basic-effects",children:[{value:"Pitch",id:"pitch",children:[]},{value:"Time and Space",id:"time-and-space",children:[]},{value:"Envelope",id:"envelope",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Distortion",id:"distortion",children:[]},{value:"Phasing",id:"phasing",children:[]},{value:"Shaping",id:"shaping",children:[]},{value:"Tremolo",id:"tremolo-1",children:[]},{value:"Leslie",id:"leslie-1",children:[]},{value:"Spectral",id:"spectral",children:[]},{value:"Bits",id:"bits",children:[]},{value:"Other",id:"other",children:[]}]},{value:"MIDI",id:"midi",children:[]}],o={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"basic-effects"},"Basic effects"),Object(l.b)("h3",{id:"pitch"},"Pitch"),Object(l.b)("h4",{id:"octer"},"Octer"),Object(l.b)("p",null,"Made by Ben Gold. ",Object(l.b)("a",{parentName:"p",href:"https://sonic-pi.net/"},"Sonic Pi"),"'s octaver. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"octer"),": octave harmonics"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"octersub"),": half-frequency harmonics"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"octersubsub"),": quarter-frequency harmonics")),Object(l.b)("h4",{id:"frequency-shifter"},"Frequency Shifter"),Object(l.b)("p",null,"Made by Ben Gold. Simple frequency shifter. Description taken from the SuperCollider ",Object(l.b)("inlineCode",{parentName:"p"},"FreqShift")," object documentation:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"FreqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting. Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.) ")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fshift"),": shift"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fshiftnote"),":"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fshiftphase"),": phase of the shifted frequency")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"The total shift (in hertz) is ",Object(l.b)("inlineCode",{parentName:"p"},"fshift * fshiftnote"),"."))),Object(l.b)("h4",{id:"ring-modulation"},"Ring modulation"),Object(l.b)("p",null,"Made by Ben Gold. Ring modulation:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ring"),": modulation amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ringf"),": modulation frequency"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ringdf"),": slide in modulation frequency")),Object(l.b)("h4",{id:"tremolo"},"Tremolo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tremolodepth")," / ",Object(l.b)("inlineCode",{parentName:"li"},"tremdp"),": tremolo depth"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tremolorate")," / ",Object(l.b)("inlineCode",{parentName:"li"},"tremr"),": tremolo speed")),Object(l.b)("h3",{id:"time-and-space"},"Time and Space"),Object(l.b)("h4",{id:"delay"},"Delay"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tidal")," default delay effect:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay"),": wet/dry"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delaytime")," / ",Object(l.b)("inlineCode",{parentName:"li"},"delayt"),": delay time"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delayfeedback")," / ",Object(l.b)("inlineCode",{parentName:"li"},"delayfb"),": feedback amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lock"),": a pattern of numbers. Specifies whether ",Object(l.b)("inlineCode",{parentName:"li"},"delaytime")," is calculated relative to cps. When set to 1, ",Object(l.b)("inlineCode",{parentName:"li"},"delaytime")," is a direct multiple of a cycle.")),Object(l.b)("h4",{id:"reverb"},"Reverb"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tidal")," default reverb effect, by Jost Muxfeld and James McCartney. Values from 0 to 1:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dry"),": dry amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"room"),": room size"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"size")," / ",Object(l.b)("inlineCode",{parentName:"li"},"sz"),": metaphor for depth")),Object(l.b)("h4",{id:"leslie"},"Leslie"),Object(l.b)("p",null,"Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"leslie"),": dry and wet amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lrate"),": modulation rate (",Object(l.b)("inlineCode",{parentName:"li"},"6.7")," for fast, ",Object(l.b)("inlineCode",{parentName:"li"},"0.7")," for slow)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lsize"),": physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)")),Object(l.b)("h4",{id:"phaser"},"Phaser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"phaserrate")," / ",Object(l.b)("inlineCode",{parentName:"li"},"phasr"),": speed"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"phaserdepth")," / ",Object(l.b)("inlineCode",{parentName:"li"},"phasdp"),": depth")),Object(l.b)("h4",{id:"spectral-delay"},"Spectral delay"),Object(l.b)("p",null,"Spectral delay coded by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"xsdelay"),": ???"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tsdelay"),": ???")),Object(l.b)("h4",{id:"magnitude-freeze"},"Magnitude Freeze"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Freeze magnitudes at current levels when ",Object(l.b)("inlineCode",{parentName:"p"},"freze > 0")," and advances phase according to difference between frames to try and maintain current spectral quality:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"freeze"),": freeze amount")),Object(l.b)("h3",{id:"envelope"},"Envelope"),Object(l.b)("h4",{id:"asr-envelope"},"ASR Envelope"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"attack")," / ",Object(l.b)("inlineCode",{parentName:"li"},"att"),": in seconds."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hold")," : in seconds. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"release")," / ",Object(l.b)("inlineCode",{parentName:"li"},"rel"),": in seconds.")),Object(l.b)("h4",{id:"legato"},"Legato"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"legato"),": amount of overlap between two adjacent synth sounds. Vazlues less than one (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"0.5"),") will cut the sound off sooner. Values greater than one (e.g. 1.5) will cut the sound off later")),Object(l.b)("h3",{id:"filters"},"Filters"),Object(l.b)("h4",{id:"dj-filter"},"DJ Filter"),Object(l.b)("p",null,"Made by Alex McLean. A fun classic DJ Filter. Low pass filter for the first half of the range, high pass for the rest: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"djf"),": 0 to 1")),Object(l.b)("h4",{id:"lowpass-filter"},"Lowpass filter"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cutoff")," / ",Object(l.b)("inlineCode",{parentName:"li"},"lpf"),": cutoff amount in hertz"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"resonance")," / ",Object(l.b)("inlineCode",{parentName:"li"},"lpq"),": from 0 to 1")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Be gentle with the resonance amount"))),Object(l.b)("h4",{id:"highpass-filter"},"Highpass filter"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hcutoff")," / ",Object(l.b)("inlineCode",{parentName:"li"},"hpf"),": cutoff amount in hertz"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hresonance")," / ",Object(l.b)("inlineCode",{parentName:"li"},"hpq"),": resonance")),Object(l.b)("h4",{id:"bandpass-filter"},"Bandpass filter"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bandf")," / ",Object(l.b)("inlineCode",{parentName:"li"},"bpf"),": cutoff amount in hertz"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bandq")," / ",Object(l.b)("inlineCode",{parentName:"li"},"bpfq"),": resonance")),Object(l.b)("h4",{id:"vowel"},"Vowel"),Object(l.b)("p",null,"Formant filter to make things sound like vowels. You can use ",Object(l.b)("inlineCode",{parentName:"p"},"a e i o u"),". Use a rest (",Object(l.b)("inlineCode",{parentName:"p"},"~"),") to override the effect:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vowel"),": choose a vowel or a pattern of vowels")),Object(l.b)("h4",{id:"spectral-comb-filter"},"Spectral comb filter"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Number of teeth and width of the comb are all controlled using one floating point number:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"comb"),": number of teeths and width of the comb filter")),Object(l.b)("h4",{id:"spectral-high-pass-filter"},"Spectral high pass filter"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),".\n*\xa0",Object(l.b)("inlineCode",{parentName:"p"},"hbrick"),": floats from ",Object(l.b)("inlineCode",{parentName:"p"},"0.0")," to ",Object(l.b)("inlineCode",{parentName:"p"},"1.0")," "),Object(l.b)("h4",{id:"spectral-low-pass-filter"},"Spectral low pass filter"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),".\n*\xa0",Object(l.b)("inlineCode",{parentName:"p"},"lbrick"),": floats from ",Object(l.b)("inlineCode",{parentName:"p"},"0.0")," to ",Object(l.b)("inlineCode",{parentName:"p"},"1.0")," "),Object(l.b)("h3",{id:"distortion"},"Distortion"),Object(l.b)("h4",{id:"distort"},"Distort"),Object(l.b)("p",null,"Made by Ben Gold. A crunchy distortion with a lot of high harmonics."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"distort"),": distortion amount")),Object(l.b)("h4",{id:"triode"},"Triode"),Object(l.b)("p",null,"Made by Ben Gold. Triode-like distortion, uses only one parameter."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"triode"),": distortion amount")),Object(l.b)("h4",{id:"shape"},"Shape"),Object(l.b)("p",null,"A type of amplifier:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"shape"),": values from 0 to 1")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"It might get loud"))),Object(l.b)("h4",{id:"squiz"},"Squiz"),Object(l.b)("p",null,"Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. Try passing multiples of ",Object(l.b)("inlineCode",{parentName:"p"},"2")," to it - ",Object(l.b)("inlineCode",{parentName:"p"},"2"),", ",Object(l.b)("inlineCode",{parentName:"p"},"4"),", ",Object(l.b)("inlineCode",{parentName:"p"},"8")," etc. The SuperCollider manual defines ",Object(l.b)("inlineCode",{parentName:"p"},"Squiz")," as:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated. ")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"squiz"),": squiz amount")),Object(l.b)("h3",{id:"phasing"},"Phasing"),Object(l.b)("h3",{id:"shaping"},"Shaping"),Object(l.b)("h3",{id:"tremolo-1"},"Tremolo"),Object(l.b)("h3",{id:"leslie-1"},"Leslie"),Object(l.b)("h3",{id:"spectral"},"Spectral"),Object(l.b)("h3",{id:"bits"},"Bits"),Object(l.b)("h4",{id:"bin-shifting"},"Bin shifting"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Shift and scale the position of the bins. Can be used as a very crude frequency shifter/scaler:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"binshift"),": stretching and shifting of bins")),Object(l.b)("h4",{id:"bin-srambling"},"Bin srambling"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". Accepts floats to control the width and placement of the scrambling in the spectrum:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scram"),": ???")),Object(l.b)("h4",{id:"crush"},"Crush"),Object(l.b)("p",null,"A classic bitcrushing effect:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"crush"),": 1 for a drastic reduction in bit-depth, 16 for barely no reduction")),Object(l.b)("h4",{id:"coarse"},"Coarse"),Object(l.b)("p",null,"Fake audio resampling:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"coarse"),": 1 for original, 2 for half, 3 for a third and so on ")),Object(l.b)("h4",{id:"waveloss"},"Waveloss"),Object(l.b)("p",null,"Made by Calum Gunn. Divides an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discards a fraction of them. Takes a number between ",Object(l.b)("inlineCode",{parentName:"p"},"1")," and ",Object(l.b)("inlineCode",{parentName:"p"},"100"),", denoted the percentage of segments to drop. The SuperCollider manual describes the Waveloss effect this way:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Divide an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discard a fraction of them (i.e. replace them with silence of the same length). The technique was described by Trevor Wishart in a lecture.\nParameters: the filter drops drop out of out of chunks. mode can be 1 to drop chunks in a simple deterministic fashion (e.g. always dropping the first 30 out of a set of 40 segments), or 2 to drop chunks randomly but in an appropriate proportion.) ")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mode"),": ???"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"waveloss"),": ???")),Object(l.b)("h4",{id:"krush"},"Krush"),Object(l.b)("p",null,"Made by Ben Gold from ",Object(l.b)("a",{parentName:"p",href:"https://sonic-pi.net/"},"Sonic Pi"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"krush"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"krush"),": dry-wet (0 for dry)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"kcutoff"),": cutoff of the krush filter")),Object(l.b)("h3",{id:"other"},"Other"),Object(l.b)("h4",{id:"magnitude-smearing"},"Magnitude smearing"),Object(l.b)("p",null,"Made by Mads Kjeldgaard. Accepts floats to determine the amount of smearing: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"smear"),": amount of smearing")),Object(l.b)("h4",{id:"spectral-conformer"},"Spectral conformer"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),". SuperCollider description:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Applies the conformal mapping z \u2192 (z - a) / (1 - za*) to the phase vocoder bins z with a given by the real and imag inputs to the UGen. Makes a transformation of the complex plane so the output is full of phase vocoder artifacts but may be musically fun. Usually keep |a| < 1 but you can of course try bigger values to make it really noisy. a = 0 should give back the input mostly unperturbed.")),Object(l.b)("p",null,"You can also check ",Object(l.b)("a",{parentName:"p",href:"http://mathworld.wolfram.com/ConformalMapping.html"},"this link"),"."),Object(l.b)("p",null,"*\xa0",Object(l.b)("inlineCode",{parentName:"p"},"real"),": ???"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"img"),": ???")),Object(l.b)("h4",{id:"spectral-enhance"},"Spectral enhance"),Object(l.b)("p",null,"Made by ",Object(l.b)("a",{parentName:"p",href:"https://madskjeldgaard.dk/"},"Mads Kjeldgaard"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enhance"),": ???")),Object(l.b)("h2",{id:"midi"},"MIDI"),Object(l.b)("p",null,"Yes, MIDI is an effect \ud83d\udc4f . Whatever, here are the supported parameters: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dur"),": duration in ???"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"modwheel"),": modwheel modulation amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression"),": expression pedal amount"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sustainpedal"),": sustain pedal amount")))}d.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),d=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||p[m]||l;return n?i.a.createElement(u,b(b({ref:t},o),{},{components:n})):i.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var o=2;o<l;o++)r[o]=n[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);