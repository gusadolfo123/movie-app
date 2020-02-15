const moviesMock = [
  {
    id: 'aaa0979d-37fb-44bb-8a8b-025259c39c6a',
    title: 'Analyze That',
    year: 2002,
    cover: 'http://dummyimage.com/185x129.bmp/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2041,
    contentRating: 'GP',
    source:
      'https://over-blog.com/sapien/quis/libero/nullam/sit/amet.js?amet=sit&cursus=amet&id=eros&turpis=suspendisse',
    Tags: ['Drama|Mystery', 'Crime|Drama|Thriller', 'Drama']
  },
  {
    id: 'e3b744c2-9eed-4f72-93cc-955a91516a5f',
    title: 'Journey of Natty Gann, The',
    year: 1967,
    cover: 'http://dummyimage.com/153x178.bmp/cc0000/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1956,
    contentRating: 'G',
    source:
      'https://webnode.com/eget/congue/eget/semper/rutrum.jsp?at=nulla&velit=integer&eu=pede&est=justo&congue=lacinia&elementum=eget&in=tincidunt&hac=eget&habitasse=tempus&platea=vel&dictumst=pede&morbi=morbi&vestibulum=porttitor&velit=lorem&id=id&pretium=ligula&iaculis=suspendisse&diam=ornare&erat=consequat&fermentum=lectus&justo=in&nec=est&condimentum=risus&neque=auctor&sapien=sed&placerat=tristique&ante=in&nulla=tempus&justo=sit&aliquam=amet&quis=sem&turpis=fusce&eget=consequat&elit=nulla&sodales=nisl&scelerisque=nunc&mauris=nisl&sit=duis&amet=bibendum&eros=felis&suspendisse=sed&accumsan=interdum&tortor=venenatis&quis=turpis&turpis=enim&sed=blandit&ante=mi&vivamus=in&tortor=porttitor&duis=pede&mattis=justo&egestas=eu&metus=massa',
    Tags: ['Drama', 'Comedy|Crime']
  },
  {
    id: 'dde12a50-4f2a-4fd7-8cdf-24ab26374cb6',
    title: 'They Only Kill Their Masters',
    year: 1990,
    cover: 'http://dummyimage.com/200x133.png/5fa2dd/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1950,
    contentRating: 'NC-17',
    source:
      'http://google.co.uk/tristique/in/tempus/sit.js?sollicitudin=vulputate&vitae=justo&consectetuer=in&eget=blandit&rutrum=ultrices&at=enim&lorem=lorem&integer=ipsum&tincidunt=dolor&ante=sit&vel=amet&ipsum=consectetuer&praesent=adipiscing&blandit=elit&lacinia=proin&erat=interdum&vestibulum=mauris&sed=non&magna=ligula&at=pellentesque',
    Tags: ['Drama|War', 'Documentary', 'Comedy|Romance', 'Comedy']
  },
  {
    id: '4c947a50-3ad8-4a00-aeb7-440305beb4c2',
    title: 'Hippocrates',
    year: 2011,
    cover: 'http://dummyimage.com/148x201.png/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1982,
    contentRating: 'R',
    source:
      'https://tinyurl.com/rhoncus.jsp?primis=diam&in=erat&faucibus=fermentum&orci=justo&luctus=nec&et=condimentum&ultrices=neque&posuere=sapien&cubilia=placerat&curae=ante&nulla=nulla&dapibus=justo&dolor=aliquam&vel=quis&est=turpis&donec=eget&odio=elit&justo=sodales&sollicitudin=scelerisque&ut=mauris&suscipit=sit&a=amet&feugiat=eros&et=suspendisse&eros=accumsan&vestibulum=tortor&ac=quis&est=turpis&lacinia=sed&nisi=ante&venenatis=vivamus&tristique=tortor&fusce=duis&congue=mattis&diam=egestas&id=metus&ornare=aenean&imperdiet=fermentum&sapien=donec&urna=ut&pretium=mauris&nisl=eget&ut=massa&volutpat=tempor&sapien=convallis&arcu=nulla&sed=neque&augue=libero&aliquam=convallis&erat=eget&volutpat=eleifend&in=luctus&congue=ultricies&etiam=eu&justo=nibh&etiam=quisque&pretium=id&iaculis=justo&justo=sit&in=amet&hac=sapien&habitasse=dignissim&platea=vestibulum&dictumst=vestibulum&etiam=ante&faucibus=ipsum&cursus=primis&urna=in&ut=faucibus',
    Tags: ['Comedy|Drama', 'Documentary|Drama']
  },
  {
    id: '302da0a7-aade-4b23-9f33-0d8e65f86f66',
    title: 'Snake and Mongoose',
    year: 2004,
    cover: 'http://dummyimage.com/208x140.png/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 2028,
    contentRating: 'GP',
    source:
      'http://google.com/dis/parturient/montes/nascetur/ridiculus/mus/etiam.jsp?lorem=dictumst&integer=aliquam&tincidunt=augue&ante=quam&vel=sollicitudin&ipsum=vitae&praesent=consectetuer&blandit=eget&lacinia=rutrum&erat=at&vestibulum=lorem&sed=integer&magna=tincidunt&at=ante&nunc=vel&commodo=ipsum&placerat=praesent&praesent=blandit&blandit=lacinia&nam=erat&nulla=vestibulum&integer=sed&pede=magna&justo=at&lacinia=nunc&eget=commodo&tincidunt=placerat&eget=praesent&tempus=blandit&vel=nam&pede=nulla&morbi=integer&porttitor=pede&lorem=justo&id=lacinia&ligula=eget&suspendisse=tincidunt&ornare=eget&consequat=tempus&lectus=vel&in=pede&est=morbi&risus=porttitor&auctor=lorem&sed=id&tristique=ligula&in=suspendisse&tempus=ornare&sit=consequat&amet=lectus&sem=in&fusce=est&consequat=risus&nulla=auctor&nisl=sed&nunc=tristique&nisl=in&duis=tempus&bibendum=sit&felis=amet&sed=sem&interdum=fusce&venenatis=consequat&turpis=nulla&enim=nisl&blandit=nunc&mi=nisl&in=duis&porttitor=bibendum&pede=felis&justo=sed&eu=interdum&massa=venenatis&donec=turpis&dapibus=enim&duis=blandit&at=mi&velit=in&eu=porttitor&est=pede&congue=justo&elementum=eu&in=massa&hac=donec&habitasse=dapibus&platea=duis&dictumst=at&morbi=velit&vestibulum=eu&velit=est&id=congue&pretium=elementum&iaculis=in&diam=hac&erat=habitasse&fermentum=platea&justo=dictumst&nec=morbi&condimentum=vestibulum&neque=velit',
    Tags: ['Horror|Mystery|Thriller', 'Documentary']
  },
  {
    id: '5b87e83a-8574-441a-8dfc-a1faaec188b4',
    title: 'Hanging Up',
    year: 1997,
    cover: 'http://dummyimage.com/224x127.jpg/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1984,
    contentRating: 'R',
    source:
      'http://edublogs.org/a/libero/nam/dui/proin.jsp?venenatis=id&tristique=consequat&fusce=in&congue=consequat&diam=ut&id=nulla&ornare=sed&imperdiet=accumsan&sapien=felis&urna=ut&pretium=at&nisl=dolor&ut=quis&volutpat=odio&sapien=consequat&arcu=varius&sed=integer&augue=ac&aliquam=leo&erat=pellentesque&volutpat=ultrices&in=mattis&congue=odio&etiam=donec&justo=vitae&etiam=nisi&pretium=nam&iaculis=ultrices&justo=libero&in=non&hac=mattis&habitasse=pulvinar&platea=nulla&dictumst=pede&etiam=ullamcorper&faucibus=augue&cursus=a&urna=suscipit',
    Tags: ['Drama', 'Drama|Thriller|War', 'Documentary', 'Mystery|Thriller']
  },
  {
    id: '483ba463-0f4c-4c4b-8ccf-93c2a5056839',
    title: "I'm Not Rappaport",
    year: 1992,
    cover: 'http://dummyimage.com/164x240.bmp/ff4444/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2009,
    contentRating: 'G',
    source:
      'http://japanpost.jp/tristique/tortor.jsp?varius=auctor&ut=sed&blandit=tristique&non=in&interdum=tempus&in=sit&ante=amet&vestibulum=sem&ante=fusce&ipsum=consequat&primis=nulla&in=nisl&faucibus=nunc&orci=nisl&luctus=duis&et=bibendum&ultrices=felis&posuere=sed&cubilia=interdum&curae=venenatis&duis=turpis&faucibus=enim&accumsan=blandit&odio=mi&curabitur=in&convallis=porttitor&duis=pede&consequat=justo&dui=eu&nec=massa&nisi=donec&volutpat=dapibus&eleifend=duis&donec=at&ut=velit&dolor=eu&morbi=est&vel=congue&lectus=elementum&in=in&quam=hac&fringilla=habitasse&rhoncus=platea&mauris=dictumst&enim=morbi&leo=vestibulum&rhoncus=velit&sed=id&vestibulum=pretium&sit=iaculis&amet=diam&cursus=erat&id=fermentum&turpis=justo&integer=nec&aliquet=condimentum&massa=neque&id=sapien&lobortis=placerat&convallis=ante&tortor=nulla&risus=justo&dapibus=aliquam&augue=quis&vel=turpis&accumsan=eget&tellus=elit&nisi=sodales',
    Tags: ['Documentary']
  },
  {
    id: 'f9c198e4-3b6c-4c10-a081-f057b2920c91',
    title: 'Vitus',
    year: 1988,
    cover: 'http://dummyimage.com/156x247.png/ff4444/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1974,
    contentRating: 'GP',
    source:
      'https://eepurl.com/hac.jsp?penatibus=cras&et=in&magnis=purus&dis=eu&parturient=magna&montes=vulputate&nascetur=luctus&ridiculus=cum&mus=sociis&etiam=natoque&vel=penatibus&augue=et&vestibulum=magnis&rutrum=dis&rutrum=parturient&neque=montes&aenean=nascetur&auctor=ridiculus&gravida=mus&sem=vivamus&praesent=vestibulum&id=sagittis&massa=sapien&id=cum&nisl=sociis&venenatis=natoque&lacinia=penatibus&aenean=et&sit=magnis&amet=dis&justo=parturient&morbi=montes&ut=nascetur&odio=ridiculus&cras=mus&mi=etiam&pede=vel&malesuada=augue&in=vestibulum&imperdiet=rutrum&et=rutrum&commodo=neque&vulputate=aenean&justo=auctor&in=gravida&blandit=sem&ultrices=praesent&enim=id&lorem=massa&ipsum=id&dolor=nisl&sit=venenatis&amet=lacinia&consectetuer=aenean&adipiscing=sit&elit=amet&proin=justo&interdum=morbi&mauris=ut&non=odio&ligula=cras&pellentesque=mi&ultrices=pede&phasellus=malesuada&id=in&sapien=imperdiet&in=et&sapien=commodo&iaculis=vulputate',
    Tags: ['Western']
  },
  {
    id: 'bc9f6792-125f-4ec8-899d-90e591452522',
    title: 'Reality of Love, The (I Want to Marry Ryan Banks)',
    year: 1987,
    cover: 'http://dummyimage.com/175x207.png/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 2005,
    contentRating: 'GP',
    source:
      'http://independent.co.uk/at/vulputate/vitae/nisl/aenean.aspx?orci=venenatis&pede=turpis&venenatis=enim&non=blandit&sodales=mi&sed=in&tincidunt=porttitor&eu=pede&felis=justo&fusce=eu&posuere=massa&felis=donec&sed=dapibus&lacus=duis&morbi=at&sem=velit&mauris=eu&laoreet=est&ut=congue&rhoncus=elementum&aliquet=in&pulvinar=hac&sed=habitasse&nisl=platea&nunc=dictumst&rhoncus=morbi&dui=vestibulum&vel=velit&sem=id&sed=pretium&sagittis=iaculis&nam=diam&congue=erat&risus=fermentum&semper=justo&porta=nec&volutpat=condimentum&quam=neque&pede=sapien&lobortis=placerat&ligula=ante&sit=nulla&amet=justo&eleifend=aliquam&pede=quis&libero=turpis&quis=eget&orci=elit&nullam=sodales&molestie=scelerisque&nibh=mauris&in=sit&lectus=amet&pellentesque=eros&at=suspendisse&nulla=accumsan&suspendisse=tortor&potenti=quis&cras=turpis',
    Tags: ['Drama', 'Comedy', 'Comedy|Drama']
  },
  {
    id: 'd52c401b-730b-4b0c-a58c-2b9bf54336e2',
    title: 'Davy Crockett, King of the Wild Frontier',
    year: 2010,
    cover: 'http://dummyimage.com/197x205.jpg/ff4444/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 2015,
    contentRating: 'NC-17',
    source:
      'http://ihg.com/tempus/vivamus/in/felis/eu.jsp?tincidunt=faucibus&nulla=orci&mollis=luctus&molestie=et&lorem=ultrices&quisque=posuere&ut=cubilia&erat=curae&curabitur=nulla&gravida=dapibus&nisi=dolor&at=vel&nibh=est&in=donec&hac=odio&habitasse=justo&platea=sollicitudin&dictumst=ut&aliquam=suscipit&augue=a&quam=feugiat&sollicitudin=et&vitae=eros&consectetuer=vestibulum&eget=ac&rutrum=est&at=lacinia&lorem=nisi&integer=venenatis&tincidunt=tristique&ante=fusce&vel=congue&ipsum=diam&praesent=id&blandit=ornare&lacinia=imperdiet&erat=sapien&vestibulum=urna&sed=pretium&magna=nisl&at=ut&nunc=volutpat&commodo=sapien&placerat=arcu&praesent=sed&blandit=augue&nam=aliquam&nulla=erat&integer=volutpat&pede=in&justo=congue&lacinia=etiam&eget=justo&tincidunt=etiam&eget=pretium&tempus=iaculis&vel=justo&pede=in&morbi=hac&porttitor=habitasse&lorem=platea&id=dictumst&ligula=etiam&suspendisse=faucibus&ornare=cursus&consequat=urna&lectus=ut&in=tellus&est=nulla&risus=ut&auctor=erat&sed=id&tristique=mauris&in=vulputate&tempus=elementum&sit=nullam&amet=varius&sem=nulla&fusce=facilisi&consequat=cras&nulla=non&nisl=velit&nunc=nec&nisl=nisi&duis=vulputate&bibendum=nonummy&felis=maecenas&sed=tincidunt&interdum=lacus&venenatis=at',
    Tags: ['Sci-Fi', 'Action|Comedy', 'Drama|Romance', 'Comedy']
  },
  {
    id: '43315bf4-f7d6-4198-93d3-3bdbc55d565f',
    title: 'Always for Pleasure',
    year: 2003,
    cover: 'http://dummyimage.com/188x212.bmp/ff4444/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 2032,
    contentRating: 'GP',
    source:
      'https://1688.com/nisl/venenatis/lacinia.js?convallis=non&duis=pretium&consequat=quis&dui=lectus&nec=suspendisse&nisi=potenti&volutpat=in&eleifend=eleifend&donec=quam&ut=a&dolor=odio&morbi=in&vel=hac&lectus=habitasse&in=platea&quam=dictumst&fringilla=maecenas&rhoncus=ut&mauris=massa&enim=quis&leo=augue&rhoncus=luctus&sed=tincidunt&vestibulum=nulla&sit=mollis&amet=molestie&cursus=lorem&id=quisque&turpis=ut&integer=erat&aliquet=curabitur&massa=gravida&id=nisi&lobortis=at&convallis=nibh&tortor=in&risus=hac&dapibus=habitasse&augue=platea&vel=dictumst&accumsan=aliquam&tellus=augue&nisi=quam&eu=sollicitudin&orci=vitae&mauris=consectetuer&lacinia=eget&sapien=rutrum&quis=at&libero=lorem&nullam=integer&sit=tincidunt&amet=ante&turpis=vel&elementum=ipsum&ligula=praesent&vehicula=blandit&consequat=lacinia&morbi=erat&a=vestibulum&ipsum=sed&integer=magna&a=at&nibh=nunc&in=commodo&quis=placerat',
    Tags: [
      'Drama',
      'Action|Comedy|Crime|Drama',
      'Comedy|Drama',
      'Drama',
      'Comedy'
    ]
  },
  {
    id: '156b733e-8b41-4ede-b4d0-e379b23a3fa9',
    title: 'Winter Break',
    year: 1991,
    cover: 'http://dummyimage.com/175x116.png/cc0000/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 2012,
    contentRating: 'GP',
    source:
      'http://smh.com.au/amet/sem/fusce/consequat/nulla/nisl/nunc.png?viverra=et&dapibus=tempus&nulla=semper&suscipit=est&ligula=quam&in=pharetra&lacus=magna&curabitur=ac&at=consequat&ipsum=metus&ac=sapien&tellus=ut&semper=nunc&interdum=vestibulum&mauris=ante&ullamcorper=ipsum&purus=primis',
    Tags: [
      'Comedy|Drama',
      'Drama|Romance|War',
      'Comedy|Romance',
      'Comedy|Romance'
    ]
  },
  {
    id: 'd7b67fed-9385-4c5b-bff6-1844d618e4ef',
    title: "Bab'Aziz -The Prince Who Contemplated His Soul",
    year: 2011,
    cover: 'http://dummyimage.com/110x210.png/dddddd/000000',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2032,
    contentRating: 'R',
    source:
      'https://blog.com/ut/nulla/sed/accumsan/felis.png?quam=amet&pharetra=turpis&magna=elementum&ac=ligula&consequat=vehicula&metus=consequat&sapien=morbi&ut=a&nunc=ipsum&vestibulum=integer&ante=a&ipsum=nibh&primis=in&in=quis&faucibus=justo&orci=maecenas&luctus=rhoncus&et=aliquam&ultrices=lacus&posuere=morbi&cubilia=quis&curae=tortor&mauris=id&viverra=nulla&diam=ultrices&vitae=aliquet&quam=maecenas&suspendisse=leo&potenti=odio&nullam=condimentum&porttitor=id&lacus=luctus&at=nec&turpis=molestie&donec=sed&posuere=justo&metus=pellentesque&vitae=viverra&ipsum=pede&aliquam=ac&non=diam&mauris=cras&morbi=pellentesque&non=volutpat&lectus=dui&aliquam=maecenas&sit=tristique&amet=est&diam=et&in=tempus&magna=semper&bibendum=est&imperdiet=quam&nullam=pharetra&orci=magna&pede=ac&venenatis=consequat&non=metus&sodales=sapien&sed=ut&tincidunt=nunc&eu=vestibulum&felis=ante&fusce=ipsum&posuere=primis&felis=in&sed=faucibus&lacus=orci&morbi=luctus&sem=et&mauris=ultrices&laoreet=posuere&ut=cubilia&rhoncus=curae&aliquet=mauris&pulvinar=viverra&sed=diam&nisl=vitae&nunc=quam&rhoncus=suspendisse&dui=potenti&vel=nullam&sem=porttitor&sed=lacus&sagittis=at&nam=turpis',
    Tags: ['Horror', 'Comedy|Crime|Drama|Horror|Mystery|Romance|Thriller']
  },
  {
    id: 'ddfd8086-8920-450b-a79d-7add1a94dd86',
    title: 'North & South',
    year: 2006,
    cover: 'http://dummyimage.com/178x199.jpg/5fa2dd/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 2025,
    contentRating: 'NC-17',
    source:
      'http://ameblo.jp/suspendisse/ornare/consequat/lectus.json?habitasse=aenean&platea=sit&dictumst=amet&maecenas=justo&ut=morbi&massa=ut&quis=odio&augue=cras&luctus=mi&tincidunt=pede&nulla=malesuada&mollis=in&molestie=imperdiet&lorem=et&quisque=commodo&ut=vulputate&erat=justo&curabitur=in&gravida=blandit&nisi=ultrices&at=enim&nibh=lorem&in=ipsum&hac=dolor&habitasse=sit&platea=amet&dictumst=consectetuer&aliquam=adipiscing&augue=elit&quam=proin&sollicitudin=interdum&vitae=mauris&consectetuer=non&eget=ligula&rutrum=pellentesque&at=ultrices&lorem=phasellus&integer=id&tincidunt=sapien&ante=in&vel=sapien&ipsum=iaculis&praesent=congue&blandit=vivamus&lacinia=metus&erat=arcu&vestibulum=adipiscing&sed=molestie&magna=hendrerit&at=at&nunc=vulputate&commodo=vitae&placerat=nisl&praesent=aenean&blandit=lectus&nam=pellentesque&nulla=eget&integer=nunc&pede=donec&justo=quis',
    Tags: [
      'Drama',
      'Comedy|Drama|War',
      'Crime|Drama|Romance|Thriller',
      'Action|Drama|Romance|Thriller',
      'Comedy'
    ]
  },
  {
    id: '3a1cb970-b384-49be-b450-d03e65719235',
    title: 'Jimi Hendrix',
    year: 1980,
    cover: 'http://dummyimage.com/125x100.png/dddddd/000000',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 1983,
    contentRating: 'G',
    source:
      'https://cyberchimps.com/eget/eleifend/luctus.xml?feugiat=massa&non=tempor&pretium=convallis&quis=nulla&lectus=neque&suspendisse=libero&potenti=convallis&in=eget&eleifend=eleifend&quam=luctus&a=ultricies&odio=eu&in=nibh&hac=quisque&habitasse=id&platea=justo&dictumst=sit&maecenas=amet&ut=sapien&massa=dignissim&quis=vestibulum&augue=vestibulum&luctus=ante&tincidunt=ipsum&nulla=primis&mollis=in&molestie=faucibus&lorem=orci&quisque=luctus&ut=et&erat=ultrices&curabitur=posuere&gravida=cubilia&nisi=curae',
    Tags: ['Drama', '(no genres listed)', 'Documentary', 'Horror', 'Animation']
  },
  {
    id: '414425b4-ea60-4b45-b7ff-83192ca2e372',
    title: 'Mighty Morphin Power Rangers: The Movie',
    year: 1987,
    cover: 'http://dummyimage.com/239x239.jpg/ff4444/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1963,
    contentRating: 'R',
    source:
      'https://surveymonkey.com/augue/quam/sollicitudin/vitae/consectetuer/eget.json?eget=odio&tempus=curabitur&vel=convallis&pede=duis&morbi=consequat&porttitor=dui',
    Tags: [
      'Comedy|Drama',
      'Drama|Thriller|War',
      'Comedy',
      'Action|Mystery|Thriller',
      'Crime|Horror'
    ]
  },
  {
    id: 'd174ebce-899d-48d9-9532-4e629c3a56ac',
    title: 'Persona',
    year: 1996,
    cover: 'http://dummyimage.com/175x118.jpg/ff4444/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1955,
    contentRating: 'G',
    source:
      'http://i2i.jp/duis/bibendum/morbi.png?donec=sit&pharetra=amet&magna=cursus&vestibulum=id&aliquet=turpis&ultrices=integer&erat=aliquet&tortor=massa&sollicitudin=id&mi=lobortis&sit=convallis&amet=tortor&lobortis=risus&sapien=dapibus&sapien=augue&non=vel&mi=accumsan&integer=tellus&ac=nisi&neque=eu&duis=orci&bibendum=mauris&morbi=lacinia&non=sapien&quam=quis&nec=libero&dui=nullam&luctus=sit&rutrum=amet&nulla=turpis&tellus=elementum&in=ligula&sagittis=vehicula&dui=consequat&vel=morbi&nisl=a&duis=ipsum&ac=integer&nibh=a&fusce=nibh&lacus=in&purus=quis&aliquet=justo&at=maecenas&feugiat=rhoncus&non=aliquam&pretium=lacus&quis=morbi&lectus=quis&suspendisse=tortor&potenti=id&in=nulla&eleifend=ultrices&quam=aliquet&a=maecenas&odio=leo&in=odio&hac=condimentum&habitasse=id&platea=luctus&dictumst=nec&maecenas=molestie&ut=sed&massa=justo&quis=pellentesque&augue=viverra&luctus=pede&tincidunt=ac&nulla=diam&mollis=cras&molestie=pellentesque&lorem=volutpat&quisque=dui&ut=maecenas&erat=tristique&curabitur=est&gravida=et&nisi=tempus&at=semper',
    Tags: [
      'Adventure',
      'Comedy',
      'Drama',
      'Drama|Mystery|Thriller',
      'Children|Comedy|Fantasy|Musical'
    ]
  },
  {
    id: 'b5751b93-70f0-4786-bdf0-6eaf846f4d49',
    title: 'Family Man, The',
    year: 1993,
    cover: 'http://dummyimage.com/113x131.png/dddddd/000000',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 2046,
    contentRating: 'NC-17',
    source:
      'http://twitter.com/nulla/pede/ullamcorper/augue/a/suscipit.jsp?montes=etiam&nascetur=pretium&ridiculus=iaculis&mus=justo&vivamus=in&vestibulum=hac&sagittis=habitasse&sapien=platea&cum=dictumst&sociis=etiam&natoque=faucibus&penatibus=cursus&et=urna&magnis=ut&dis=tellus&parturient=nulla&montes=ut&nascetur=erat&ridiculus=id&mus=mauris&etiam=vulputate&vel=elementum&augue=nullam&vestibulum=varius&rutrum=nulla&rutrum=facilisi&neque=cras&aenean=non&auctor=velit&gravida=nec&sem=nisi&praesent=vulputate&id=nonummy&massa=maecenas&id=tincidunt&nisl=lacus&venenatis=at&lacinia=velit&aenean=vivamus&sit=vel&amet=nulla&justo=eget&morbi=eros&ut=elementum&odio=pellentesque&cras=quisque&mi=porta&pede=volutpat',
    Tags: ['Drama', 'Comedy', 'Drama|Romance', 'Drama|War', 'Horror|Thriller']
  },
  {
    id: '28d34f2a-a884-449b-aad7-92b11d84dfaa',
    title: "Hart's War",
    year: 1999,
    cover: 'http://dummyimage.com/142x155.jpg/5fa2dd/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1937,
    contentRating: 'PG-13',
    source:
      'https://yandex.ru/volutpat.jsp?felis=in&fusce=quis&posuere=justo&felis=maecenas&sed=rhoncus&lacus=aliquam&morbi=lacus&sem=morbi&mauris=quis&laoreet=tortor&ut=id&rhoncus=nulla&aliquet=ultrices&pulvinar=aliquet&sed=maecenas&nisl=leo&nunc=odio&rhoncus=condimentum&dui=id&vel=luctus&sem=nec&sed=molestie&sagittis=sed&nam=justo&congue=pellentesque&risus=viverra&semper=pede&porta=ac&volutpat=diam&quam=cras&pede=pellentesque&lobortis=volutpat&ligula=dui&sit=maecenas&amet=tristique&eleifend=est&pede=et&libero=tempus&quis=semper&orci=est&nullam=quam&molestie=pharetra&nibh=magna&in=ac&lectus=consequat&pellentesque=metus&at=sapien&nulla=ut&suspendisse=nunc&potenti=vestibulum&cras=ante&in=ipsum&purus=primis&eu=in&magna=faucibus&vulputate=orci&luctus=luctus&cum=et&sociis=ultrices&natoque=posuere&penatibus=cubilia&et=curae&magnis=mauris&dis=viverra&parturient=diam&montes=vitae&nascetur=quam&ridiculus=suspendisse&mus=potenti&vivamus=nullam&vestibulum=porttitor&sagittis=lacus&sapien=at&cum=turpis&sociis=donec&natoque=posuere&penatibus=metus&et=vitae&magnis=ipsum&dis=aliquam&parturient=non&montes=mauris&nascetur=morbi&ridiculus=non&mus=lectus&etiam=aliquam&vel=sit&augue=amet&vestibulum=diam',
    Tags: ['Drama|Sci-Fi|Thriller', 'Drama', 'Crime|Drama']
  },
  {
    id: 'ed3ebcc8-eba6-4fba-81be-ccc8c9c3026c',
    title: 'Louisiana Story',
    year: 1998,
    cover: 'http://dummyimage.com/176x109.bmp/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1918,
    contentRating: 'NC-17',
    source:
      'https://yandex.ru/nunc/vestibulum/ante/ipsum/primis.html?sapien=pede&varius=morbi&ut=porttitor&blandit=lorem&non=id&interdum=ligula&in=suspendisse&ante=ornare&vestibulum=consequat&ante=lectus&ipsum=in&primis=est&in=risus&faucibus=auctor&orci=sed&luctus=tristique&et=in&ultrices=tempus',
    Tags: [
      'Action|Drama|Thriller',
      'Drama|Thriller',
      'Comedy|Romance',
      'Horror',
      'Horror|Thriller'
    ]
  }
];

module.exports = { moviesMock };
