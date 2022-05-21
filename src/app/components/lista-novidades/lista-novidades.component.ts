import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-novidades',
  templateUrl: './lista-novidades.component.html',
  styleUrls: ['./lista-novidades.component.scss']
})
export class ListaNovidadesComponent implements OnInit {

  constructor() { }
  Cardapios:any;
  ngOnInit(): void {
    this.Cardapios = [
      {
        imagem:"data:image/jpeg;base64,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",
        titulo:"Trattoria De Origem",
        endereco:"Av. Sapé, 501 - Manaíra",
        cidade:"João Pessoa",
        telefone:"(83) 3246-5565"
      },
      {
        imagem:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYUFBQWFxYXGRgZGRkYGRgeGRkbHhsZHBsZGxsbISohGxsmHhsaIzMiJistMDAwGSE1OjUvOSovMC0BCgoKDw4PHBERHC8mISgwLy8yLS8xLzEvLy80MS8vLzcwLy8vMS8vLy8vLy8xLy8vLy8xLy8vLy8vLy8vLy8vL//AABEIALMBGQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcAAQj/xABIEAACAQIEAwUEBgYIBQQDAAABAhEAAwQSITEFQVEGImFxgRMykaEHQrHB0fAUIzNSkuEVU2JygqKy8RZUk8LSJENjsxc0g//EABsBAAIDAQEBAAAAAAAAAAAAAAQFAQIDAAYH/8QAMREAAgECBAMHAgcBAQAAAAAAAQIAAxEEEiExQVFhBRMiMnGBkaGxFCMzQsHR8PFS/9oADAMBAAIRAxEAPwCKwnDsQvetlH84Da7QNZJj5GlYt7qRntXF8QJjyA250fcvPhyzGwzKVABTYacjrpMdToPIgXuLM2puMmm+o6+APKN+VLmpjNe3xHFKoefzPMZiGDBURW0UlSAYOpOhg66bbfCh7wS4czC7bJMkq0rI6225+Jo9YvMEJtu5nLoNSBMALqSdRoeWsUzf4aiDRmXUe7BTnyOm/T7qkm9zf5lw1rLbXmIJ+g3o7jow0iDEeczyqX4Jbun2gZchCd2YMtIIiCQNAf4hQmCwb51/W28szLZhsJAMzz09ak+z+DvqG9rba3qokwc2pkqRuPHxqqjSas5J8R+Zc+wfBwqLibqL7Vx3DlAZUPoNW36x61Ido8ReRc1sNMn3D7q9SvM/ZU4XAWRtGn3UMaxxuK7oBF3/AIi1Gu+ci/SZpnnx6miuG3lVwWti5pCoTAzmInqOUHrVm4x2fS5LpCP/AJW8+h8aqN/DsjFHEEbg/nUUNQrgm4noadaniKZQaHlC+JYR1IdlUC4A4CbLm72Qg6qROx9NtJjsbiIL2zzGYfYfu+FR9l0vBA73XvsRbUgKQoBOUtpLDWSZkDN5lnhd02ryE6Q2VvCe6fhPyrTFU8ykjYwfWpRak3mX+NpbO0Q/U6gMM9skMSBAdSZIBIEDoac4QQbSlYjX3XLjc7MdT5ctq844R7IguySRBVWZpmRCr3ifKnODj9Svf9pv3u9rqdw5LA8iCdxsNgsP6XvFF/B7yC7Ytqi9Ax+MAfYahuG497LBkOuxHJh0IovtJezYhuigL8BJ+ZNM8OwqnLcuBSpaFzFcuhhiwYZTGsKSCwV41AJYYSmbACOVZaeFAYXuNud5c86YuyQO6wkEEao3MEHlWf8AF8B7LMhT2bECYMLIMkAe7rAMqJ2mpPB8YZb3tY0aAygKJXpoACRyMcqsXa217TD+1trn2MCO8p2OuhiZjpTAsHBtuIsNNsO4DDRvoZkd+3lBBglsrCREDvAxOnLkaBxa93NJGuWD0AEenxpviHHLJYgAyugKmAPAD3Y3onggXF3lsg5SRpm6KBMQPeygtG5gxrANu6YiajEIrbyC4w2ZWjurDFQYjKMzRptz9av3Y36M7l/D2WxRewgZnyQBdYNkiZ/Zju8xOuw3qZ7A9jrftTdxGVrlggW7Bg+y1zB3H78tIGsTO5EaTdvch8aucQMPTJaAYllqOMvCRnDuAYbDL+psoGA0Y6uT4u0tQTdpUS4QxukjQqEQLPme8aMN5heytqrjuabEASCY0PPU66QNDUJ2qwUMt0fW7refI/DT0FY4LFJWrhHGhGnrB6twpI3khc7U4c+9nUHTVZH+Uk/KmMRwrCXka6jAEhRmSTGvdm2OesbTtUFwrS4SHyHK5zFcwWBMkSIiJB1ghdDXdns36Sp6hyY0junTymKcYiglNGYX8Iv6zGnWa49YxiuFvbIJQLOiMbaCYGpmMyk66HlQjOYjNPhmuD5ZDWk+zW4pRwCCIPj+Bqjcd4VdsvCoWtnVXBeYnUEe0BJH56UjDLUXOm32jqhXucrf1I6+xc6SdObMvLXQDzoPEWTzjy7zfeKPxIbOcgaBy7jGNpm6wj51HuBsBaHn+jf9p/GuI5wpWHA/WM3R7g7wB7swImdYoC8ApIJcEaax+FTHfzAIywdsrKNxrQeMvuQR7Yanm779djXX/wC6SF9fbWRhuhkgKTBJ5ydI5fhQ2MwREEWnMgMdGOp3GlHYlgVVfa6yTpmjX0+2g8RhFGmaZ5geE8zV7zhf/XkHxmyFC90jUbhh1617+gmvOM2wHUCrN7AdKcYQ2pCJcWCapheOxzXCVNtrXeBEhogeIBE+q+s04ccpVFVgWAJcNlJ3AHXr9s0Hb4kRbEHdgB46ba1IYBf0g5WVSQNzmHpppOtKLi9tRHHckKSLECOrwq07Ele+gzgqVBHQkgwvLUf7D38MXl89y2ZiAyuGjWSSBO/Pr60ZjeHW1KezzqxQz7NyAAIYiQJIOjZf7Ou2kfewot6e1cHLm90EDMSDmOrZpEeR3irsevzBlXp8QT2KA5btzOuneQGRruTqD/OrjZxAe0r2yWSPEx0HjpVR4XZtqxa5iA2ae6oy6csztA9IHnyqz4DgmIS21xLN4qwDQr2paecTJIHrpzqgBuZuzAAZvrNAwlybVscwqz5xULi8XdXEZodbSIzOSO6QonTUiZPgevKguBcQEe+SdiGmQRuIMQanUxQbukAgwNRII5/Kga1I5i51vzg2ULruI3hOMIyp7SLbuqtlMwAxhZaI18ae4lwxLy5W3HutzH8vCmsbwBLjrcUwwymCJU5QcnkAYJA0MVF4Y4nDpdLDu2kEKYKsSxZ2UjWAugnwkUMaCnxIbHl/UhSL5kax5f1Io27mGuESUJGUuonuEiSAd9geulJ4lZtqVCNmlVLENmUsVBJVtDqZ0O0DrAsN7FWcTbhj7PWEZ8olv7BmHHIwfuqtYrDNbcowgj4EciPCiadVsuRxrGmHbvagZtGG45y2X74fCozFe8FksWAkbnMmqmRvTvCryrhg8rAzmVzEHvMZltWJ6nc686g8PiD+hmC0o7RlYq2qkwCFbXvHl6inOL43Lh7dvNma5JJLg6ZidWhRE+A0FDd0SMo5wE0fHl6n4/5IixZa7c10DMM5BUEZiToG94wGMAEwp0pzH4mYXSY7+VlZfqlUVl0ZVIaJ2zRyp28vsRAnP3SAyrmDAg/rEYGcrAslxY3A1yk0zwzhj3mhRoN2Ow/E+FMHIpJl+YejK7d6+iLtGMNhWuMEQSfkPEnkKE+lXiLYbDWMMjEvczlm5hBEqvQFm33hSOdaPw3hyWVyqNTuTufz0rFPpYFzF8SS0oZUULYUwYYyWdvIZiPEJNY4Opnq9AIvxmKaubKNBM+XfceQk/6Zo7D4xkDhQ4W4hR4QSUJUkTMico25SOdXHGdlbVoIqZSI+veVGY9FDCCfWpOx2bw12zI9pbZZzB40+4inC1kIvBDh32kSv0gl8TZv2/1Tr7QOo91le4WOjbsVIBPMorb1u+HcFQQ2Yfvaa/CvlXtLw32NyAQw6rz8+hq9/R520u2MLde6Sy2MoE/XDA5bcn6wI0PIMOQrDFYP8SvhNiNuUwLFDYiazxu4Q3eyKFUvauOxVVuDu94g7EMNIgxrMxUNxXtzgWtOhvaxuASobcAGATqOlZVx3tffxTZrrBlDHJaQwqaQB7pJI0lm31A30mODdkzfUXHtW7amTBGa5GkGfxkeFB08MKWVnNiNdIQtPPoJcez+JFwNdtG46gQTaaGE695SpldNQY5VI9lbM3S37qfMkfdNZwjHCXsoDIDy1CtvyO3PTx5b1oPAeKouGe6rAPcf2a93MVfKSCUkFgJLEbkLpqQKa4jF95h3A3awEFOGKOOQlns45GuNbE5lE6qQp1g5W2aDAMbEineK4BcRZa20TupInKw2b8fCar/C8CT3H7zvD3yGOmi5V96Mx0JZVQMRmKqdKmMTjiLi20UsSRnI0CIec8m5geFIsOO7rBE1B35es3N7XlAX9U9xSfczKSCi5TMSR3iNaERg75UV2J5jJHjLFNB4kgVcOKraW6Wa45EL3CTGYH3gd9RG3U0BiMNevA+yKKn9UAQW84356UYQOEZJUNrke8gr9nI5MuxEiGBnbfurt5faKjzgP/iuEf3bpFSwdkuFSSIzCVQ7wR7zNy6VGX8OAIDa9Agj/wCw1JMulz/cHuYBdD7MjfWH5EiCCfDnG9JxWHH1pDc5tqPTUAUl7I5OY02UDltrM77imMQsliCYkmABpOsVx14zhfhJrsX2dw+KuXGv2g3syoWDlGokk+ziTtvPzrQ/+GMN/UL8W/GsPwvGsRavC1auvbUspZQYnYa+lX/+k7n9bc/jamNKg5UeKKq7g1DpKhdxZbRsrDlKjUfCvMPdRDItgEc0JRviNq8uXbWhW0m+ukctxrpXo9mw1tkeRNAHw7GO1UOuqj5tJN1tls6Xr2vdBnOcu7Alo0BEzyoXGYUAj2d1SAABnGhgRJIPry5UziblvKBFwZZgAhiSdSSWj8ilWeEtcQMlzKDrluDX5aVzPm4i0p3GQagj+oDjMI6oxDW2MHRX1+Bmt8wwKWrYCycqj5c/CsLThdxWGZ0gESdjprAre+GtmtI3VF+wVrTUNc/aA4s2sNfeZ7xbilq93haKXIH6xWAPkRBDr5+kUzwvi7p+1I8CNvMzsfzrQ13DhSy7QSPgYpC4O4VzC2zLJBYKSNBJmNtKXZGsVF7RtUwNE0rBsvW8u2C4uDzqQ/SQwIMEHSDsR0NZ1h8Pda3ca22UIpaTscuUlR4gGTGwHiKMtcWvWcvtRntuCyXLfeBURJK+8sTBkaFW6E1ehQygmKPwxpsVNj6S1cY4T7YL3ymUFdNirQG0EawCBuNdtoe4pgLd5MilQ6aLtpoO6fCI+VR2E7Q2yAVYEGp3gl23dLnKpIymYE8419PlWhw3eEC9rTnZ6YDA7bSC7L3PZ+2V+7kgmeUZp+6ol8bcu3/aIDnmVAEwBsI6Rv5mr/iuF2rmbMmrAAkEgkAyBIrsLwu3bEIMo8B9p3NQcDURiy2J+JZcegZnK6nTptrKnZ4N713EuFEkkFgNyT3mPmfPrNTiYu0gVE/eNsBR9YIXy+EqPmOte43s9nN0+01uZMpKmUyQQBDDTMM3Leu/4dBzFrjHNlYhe6M6hQHB1cGFj3juZmqPgqj+Jpk+IDgXPtwEEftAvsnuKvui2VDEDMLgXLttqSP8Jqn4nGriMYwNrL7NRctOTqVeUYMv1WDo436VfrfCrSFSEXMihQSJIUbCTrvrVX47ZRcS1xffKIr/AOEtA+BoegyqxUKZpRILeGJe3bYZXQkASenh61H8a4clyyqWyFUmP1ce6BAHlUilkEC6kzENlOpHiNjHjUFirB9qXVRroJD5yT9UKNCZ5wNtqOA5GEnrILAdlba3pxFlCqiSFEBtRqVJYTGYazv1ime3y2ESxas+ztBmu3WUKQqSVRViQDkV2bMNyp6AVeLPBcREvbZiea94eXdJ2rN/pWwz2ntZkK5lB7w72jPrrqAZ+Q6U7FMLRBvrEtRs1Q22h/0b8FlmvXFUFoK933QddBy8PCtewWFUDTz86ybsJxj9QoiSsgagbaySdAI51c+DdozdICibZMZ1zZPQsBmHiNDSd1Jclo1W2QBZM8WsWr6XLDjMCNYE5TyJOwPMc6zns274XGDDXm7hdVaQpS4DJw9xgQdnK6rBmddNbve7Oh7we5cLKpkJmYJPUqPePiT5gwKrf0pcPg2b6GIDWmI3E62z6MD6sK5bWtwlGW4mkYfLbETmYkktESfzy+6geJcYS2DJH58KhF4s91EcDIjiS50+qW0G8EiM0RJG+1Q95lZdyXzGSRup9YEQDp++ela4TAF2uRYQSrVSmNNTJx8UDbW/cw7NbJYG4pzFYYgZl3HnrSLfErDMFt58rDW4JAU8tD9v5BXBVzYDEKeQuEfwAj5g1UMNe/8AkEcxoNOkxVMZTFJ8ohmDZqy3kxxN8xdblmbi/wDuEWzmHKZPe01FRLWutqfSyPsNLW+GYzdYxroyGBIEGRtrz6U1curyusfJk/8AHQ1gX0/7DFojb/feM4pQW71rUxqwtRHXQnSKAvWyBpbHmMg+/WpF3Vjo5GwyyCdABMROwoW+Ad7o9Mvz6V2f/azhTHHeVZFJxSgiNRpp49KuP6TVStLGMHezQRrp91SH6YOop/TF6S+kRVCO8b1ha4e2wAZQANdJ366zr8K8OFtj3faD/GfwpN+xaADZ3AJIGpY6bkydN+VEJhEYd248eZFJmzLuY7Q022U/MGfB2wudbrKJC66kncjaPjT1zF5AFR0IIk5kbfr3QAKTewPdCrcEAknMrbnloutD3eHssE3LcMJXYfKZjz6VxGbaxkgr+4ka6RvH37lwalTERDEH4Ea1tPYG+XwNmd0T2Z1B9zu7jyrFrfDnzDvW4mffXz61fvof4kw9th7m8i4neBke6wEHlCn/ABVtSW3AQbGHMtgSQOYndoLGTEXV/tZv4u999B28SQjW4BDFWBO6kBlbL/eVspPSRzqf7f4aGS8Nj3G8xJX5T8Kqlu8DQdQMjm0c4TLXoLm1tb5EMXEsq5QQB3vqoSMy5XAJBIBUAGOlIw+Ce42VFLHp0+4VKcF4G16Gbup15t/d/H7auFixbsIYhEAkk/aSaDq17aDUzDEYynSJFMAsd5VrfZO2qNcvjMVUtCHLsJ1cQalOwuEZDcMsbbhcgcd9CCwZW6kTvpNLxOGvXLysy2zaAddH95HBBLCNz3djyO9SOAxGHsk2gypkGxMb67nc0VgHs9mNyR7CKK7s6knUnlwkuh1inKGNwMJUgxT1twRNOrQEiOClikKvOlExVbShnlwVXeMcADM1xPebVl6nqPH8+dhVwSa9NUempFiJanUZDcTIuMWL9h/1ZKE/VIkecfhVu7N8NIS215f1lwOSSCGXaB4AjlU3xPBe0aywcobN0XJH1hldSh8CG/yijLziNeulUSkF1hD4guLWjViEgE77k9etYt9NoJxgnUCzbj+K7PzNa7xriVqzGYS51Vd5gjNl6sAdudY59KGP9rdsq2X2otDOF1AJOwPnMeEVdtplTIYmVfsTdXOykbAMwPusgIBJ8RIHiDFavjuK21trkyyRJJIEgeJ86wu4pGqkqYI0JHmNOVWvsp2qYg2rtpboXnAzxtmg7+PWsKiZtYXRqgWUzUMFxNryEm2p090GVnxeIJ8Fn8Kx29unD4UWmbM11s0clywxCzyBAHqKl+CcfwgX9qBH1SSCvmp2rOu3fHP0nFGARbVQiA7kE95vCT8gKyya9IQ7WXSXDsdhXxNgFSGa3CMMwzDKIXfllAHp4VYk7N3/AN1R5sPumq59HV/2YzhM41zEEArzKnTXuyRry9a1DCY1LglT10Oh0PQ6x+IqKva2IoiyAWHG0WVMKhbWRuEwL4fDXwxUyrFonRQjTG0mqEtwfUmOZO/w8q1PHYU3LFy2DBdWWddJEToR1POs47VcDGDtrcNw3AzBAozryJknOdNPnXA1MSFY6sYVhnSipuYKuLubT/mIJ+C1z3r3IrH98z8hVa/pFYjI58c5keUk+NOrxBYjLd/jFanA1h+2bjGUj+6WVsU3e9wjqWO3ovSkku7ZlVYG/ej4d01AJjRB0umZABywAesNqdTVl7L8EvX7TvbYrByj2h0JieUkAAjnWNbC1FFysumKpnZvtKGWP6Y5IggnQeAoH21aJgvo2xKXHuvftBiG2DnU+MD7KiP/AMZX/wDmLPwf8Kd0q6BFBOwiZ1YuzW4xi9hEKIgdgV1JKcz5GmP6J6XlA/uvp8KkFwd3buejD5aGmcRhmUasg8M+u3SKUZj0joKh2v8AWNWOHlIc3UiYkq2vwM9eXWveJ2MxXIyEBQslgo8dG1p27hWYIFZCOfeA1Ouk60NiuFuFklB5n7qg35C0uMijzG/pAgje6AhPg0n5H50bwLGvhb63+73GAYAgllJAcQpJ21A6xQFjCMGnMmgPM9CABpXn6M8+7PXLrPw2qw01AlSQ11Zjb0m98TwqYnDlQQVuKCrDlzVvQxVJ7O9mnLFr6wqkjIfrEGDP9mfj5b+fRlx0hDg7sqNfYsfGc1vfQjUj4cqvX9HZCSsmd5JPqBsDWeMRnp5l3g9PEPQzUwdDxnJcjQVB8S4szXfYplLKJNpysXkI1g/VZddD57U9x83Rbm0gfXvqSBKAEsNQd4AMAmCY1pnszwwWrQhcmeHyQJtyATbLAS8GdTr8KS0wEUu2p4D+5IC2zGH8PwiYa0x6SzHykhRJMKBoBP21R3vZ7od8pBcMwdsqRmBIZoMLGkxVk7Z47JYy87jBfQan7I9ap3CsaFuKxuJbyh2zuJCkIxBCgyzTEAc43orCIzHOdyYfhKeWk9Q7m8lW4pcsurI1oHKC3sWU2WOZtQqmFMASPCedaBg8UZB5MAdNj/Oss4jjw75s6vIWXUMM5AALEMAQx56b1fey+IFyzaPRSvqun3fOj1q1FrAX8JNpji8OBQR7a8ZapJ2qv9quL37Kfq7Rjm4YDJBB1nSCARqRuKnbW1R3ai6P0coYm61u1B553VW8+6WpstswuLxG40kDguK4t0HdJOus4Yz7sR39hDfxDpXrdocTbg/o114IzD2YQamIDlgg5a61O4bgapcLBzkk/q4GUgjQN1IMkMADEAkxRdzCJ9WU/ukj5DSpLrylVXqZmfFe32PZytqxasAAkhyLj6CSQQQkQDsDt4Gq1xPtFxI63cQ6qQrAKqJKtJUygBg5W5/VNa1xPs+t51a538oIBBysQYkErvtHL3j1pFjs/h0AUWe6oOjszjeToxI319T1NELWohR4ZJpknQzLbrYm5a9r7OTbbLmU5zroCdT3ZBEzEg1ReJG6l1jck3J1J5/y8q+geLYkqpAAC7DKI/2rPsVhbZvG5lBYaTv+elAVhmbMNuUZYHCNUbKPmZZibzAnQjwPKveGYt7NxbqiYOx2YcxWhcV4PauK0rLkaGSDPLWoC3wK7cZV9mLSoDu0lj51lfS1oXX7KqU28Jvy0+8u/C+GWcVZF62QVPIjvI3NW8vwqk9v+EtYvI4EoyLqNiZbTz0mp3sLj7uHuXVUBrTZSRJjMOankY38hU32mx9q7ZFo2WOdlUwV7kn3p8PKh1zK1xqJLYOqU1Eh/oz7WJaJs3IKuQQCAIMdefl9nPT+F4OzmVrJ0GXOrElu6HC6kzPfMndoGumuO8K7NuHyjJlkEFvD+zB106itC4JiTbxVqSSGBVgOehjTzAqlTChwxFxf4PtJfAHuyzeYC8vvEHK2jG4BNZVxJ8VxiyhsYdraIxIe66qjaQQIkkg8wI3oD6QeN3MRiB7DEwjOlhFt3LgbUwzMAAvvlhudMvjGsW7YtWFVAAqKFVRsABAA9KMCGiFI5fESAhgRMU7Q9hcZhrJvP7FlGUHI5zSzBQACgned+tVM+3/q29DWm9pe1Y4jh/YYS1fuXM6OQttoiG3bZdTz6VTeI8Dx1i2bt2xeRAAS3dIEkKJysSNSPjTPD18y+NtYLVpWOgkIHxA/9u56VofYftyMLh/ZXUvZg7H3S0zEGfIAelZ4OLsP3vhTtvtCw5/FR+FbVUWotiZmjFTcCa2O3d3EzawmGvXbmUnvZURRtJLHx251D/ofGP3H+Fv/AMqD+jLtbbS9d9s9tJQZSQFmD3hPw+FaJ/xzhP8AmLX8Y/GlVamUayjSG03zC5lA/Sii7Asd4caaaeZ+FRgt3NfdPm/4ivFw14mfZvP+CP8AV4U5/Rl1oDWzB3937JpflN9o/TKF888t4ZxDFVgyAc4E+U78tqLxmGuEAALAH76HxjepMgIAvss5Ud3ULE7zoenLnQztdhotgDcwxyjYiSwqxFjoPrBmYsbk/SQhwt4alRHgyT6QxNPJYIBzZRtoGU7GecCJjSaJAuZtVAHKWEbTE0K7uSVFvn1BJn1iuF+AEi4vqT8RFzFOYJIUrBkETIMzoSZHhWs9i+1QvgWLxAvAaHYXAOY/tdR6jwy4W9P2ZPjmSJ/iomzbzIOTKYkHUEbEEazsZqiVSp1hgwyYhCvHcG022/h+YobJVO7PduikW8ZJGwvAT/1FH+oadQN6vlu5buqHRlZWEqykEEdQRoRWOIwS1PHT35RTVp1KDZXHvM3+kF/1ltP3VLfxGP8AtqucIxT2rudLlm2wUw1/NkOqyvdEyR8pq59suB3Ll3PbKt3VXLMNOp593n1qu4S1cwzXDdw91gyFcmTuN3lPfYgiNOQJ15b1fC0mQAMLRzTq02wmRSCbbcd5D8eusL9wMwZhkVioABZbaKxgaakE+ZO21Wz6MuIS7Wj43F+ADf8Ab8aod22cxi2QJMKAxgdNdT6matf0cYS6uLVjadVyOMxRgNRI1OnKiFXM4PWXxOUYXKTsJrdvSnHthtwDz160hacQ0wnmGiga4rXV011pWJCUHjLZIMnKvOjzQWPtFhl5c6rLpvKdxzErlJURbQerHl8TFUkNVw7aX1RPZgyxifAfkVSmPPkR+fT7Kq09Z2PTtTLczON/efyfzHwp1L4iZqLxxkhZgnmen4/jRWGAXx9DPzrOOLQ+0Z5R8vlTmWh1vDrTgv8AQTXCUIMLsHKRQHavHtZt+1tmHysinmC4CEjocpaDy3p0OegHrUL2wxKnDEEic6R8fwrRNSBAMetqLt0P2lPxF1rYtFGKlSCpBgqQ2hBG1WG721xy2Z/SbnPfIdNOoNVrHsDkHlTmNulVSNxrsDrM6g77U2dFN7jhPn6sQRafRXZjhq4bCoiKAQoLnmzkd4k8zPyAHKqp297Y2Wwl61bu2zdlBkBGbS4mYZd5EGRyg1WrP0oYtbXeTDty9xx9j1BYawHdrjgEuWchQNCxLaSeppO9NqDBmjKkvfggX+JGf0weYHqKUOLpztWz8fxqRfhluNFUbbg0zb4MDyXw308+7RA7R5r9ZJ7MI2b6Rj+krHOwnofxFd+m4b+o/wAy/wDjRQ4Emb6saH62wGunjBpH/C4/LfzrVcap4Qd8Gy6X+kk/0l/Zqq5sstprzy7xy0pS3Ljbgx8PtpAxpIn2h+I9IHSnbWJY7sx9SfkKT5QeBj/PbivxHFS9IIRjEHQTHTY1J5r6IsKR+9m2O+nT4zQrO6hRDGQT476SDvpHlXltHbdHyjoFPx1EVV0toB9ZAq5xqw9hOv3rkaoCP7w19NZ9KHwUl2OYBl5HP8iBvH2UQxyyMqQdu8Sw126fZQWFI9pBYLPMgkfLc+HOqDoBf1lGAvuT7STwtrSCF+Jn/TScC5a4yquhbKIG7AwfUyv896kOGYX+1I8VgnwHer3HcONq21wP3RcDQABBdgu+/wBYfKhBUXPY2vC6LsrDeOvwa+R+wufwN+FA2Hv4V29jcuWGmWSO6Tv3rbSpJHOJ8auPD8SgsS7XMOrCfbNdRnuD+yGUkD+6BtVS4mLeabbXXQ/XuCMx8Dz06waYNT7sZlM1o1jXY06qi3p/NzJfD9urp0xGFW7G72tD/wBN5B/iFTdv6Q8IR3/bWz0e0Sf8maqNgHh461MvYUimeFCVEBO8U4/BilUsmg3k3c7dYE7XmP8A/G/96AV7wvtjh7uJs2bYuk3GIDFQF0R25meXSqnfwIqMsYr2XEsAg/rgzDwaUB+b/CiHpU1W4vF7KRrN2sGQDTpFD4Q6ep+2iBQsqd4oGvQaRSprpW09NR3EL8CaPc1A8buwpPQGumlIXMoHaS/nuEg6ny22j7ahyTzHqPwojiGIDXG15x8Kbw9vO6oN2YD05n0En0rFjrPb4VBSoC/AX/mQ1q5LtDLA0E/dJ86eZZ+t8Mn3TTeEwb2b12y+rIxWdBmWZVgI0BXLUl3hyn/EfwqtpvRqd4gYcYB+iseZHkGPzgUVaw6ryZj0/HkPWnkzHkqj1P4V6lzp3j4bfH/eumhnhVoliFH7q/jzons3irVvEg3biW1ysO+yhSZWBJO8TpTBU7tqeXQeX41We0g79sf2m9fd/PrVlTMwXnFvaj5cMxly+lXEYY2E9kbDOXGqeyLAZWO66gaCss4ifdHlSrv7UfnpXcSMuo8RTalSyKVveeBd8xvHrvuKPGp/BKCD3ANOZXeNPnUFdGqDyqx8MsggyxEa8o9dNOQ8ZoHtI+JR0jDs4DK146FGX16H7eXOm5G8HXlLfkVIW000Ik89Pz/vSThGPMHmTHKld4yPXT5gyqAw3PvCJ20NT0L0SotcI0Z50AMwdNjGnKpPMeg+ArentBK+8HQgAFsomZmABvt40z+kwYBJEbqCfSRufw8aOxzhFB7oGkAATz0gCelRS4xwSM++0HrG46DlHjVt+cuFIudIecVmGXKxIELIOu/LSD405luqotqp90SdoPPUn7OlM3LikKSH1klVmY+qT+BpF3i4UQikcp7oH21jVXW1ppTawveC4iwR73KebH5mghY1OZobTLCgiZ5yafbGM41GnhrPqYplFJJJgees/D86VnkIHCa57njJThpYae1ffkFA+zSiuOq1zC33diQjPlGwBR4U9SZHWg+FWTnHe6Tpy6b0f2xwCDD5mJPe0mAASCdIG8gfOl5K94BfW/ATZrgXt8mEcH42q4RLlsWhdFwSWVC7IVnQnXRgR6iieLcTfEW70pdZA63LbFNEWCHVmGgUA6amqr2C4hdWUtsivOXM4WAp1zS4IUDXWrvxbEW7qrZOMNwDVxbR7j3G/wAMKqjko05703FypEt4Q6uBvrfUkc9h0lOR4IPTWrRh3laq162VYqQQQYIIgjzHLyqc4PdlAOmnw/lWuAexKQntNLorj/XhNyqfw5/acUu3t1wwAHgVIH2+0q3YlwoLHYAk+Q1NU7sIma1fvEa3bhn0E/a5pk4uQJ559SBN94e85vBj89aNU1Ddmb2a0G/eCH/ItTANCzJt4uvK4V41RKTy4dKqvabEhUc6aA9OWvPnNWPFOY0qjdqbcK5/OpFdCsMt3UcyJSXU6wPz8K8wGLa2xuK3esq10LGl1Ej2yA8mFtmIHWOU0QtDZoOUE/VuafVf9faYafvW3WR0C1hPX4xXNPIm509Bxi8RcuXbjXWKgnQjLpoIGsmdOY3rwuekeOXMPlr8afQRXNm5R6zVbQmmgRQo4RlbIbUvnHTTL8Bv60QPz/tTBtNMyg8Qsn4zXNh+rO3rAPoKmXMce6F5y3T93xNV/jdj9i3i/wDpn7qn7ODLEW0AlthsI3NAdo8K1sojwCFutoZ2WJ+JFa0WHeART2s6fhmUnXT7ymWhN8en203jNbo9af4aJvnwBPwUmmra5ryjqQPiacE7zwI4Qm8f1gEkQasfDy+SQ5665hpoKrtsZrvI7nWrDg5CQB8I6+HpSrHm7gdI47PFqZPWF2rRI2U9fcmPh508AVOqNG/Ij5UzbJyySwpcrP7T40AesMtvb7RTHkFInTXNGsDn5xXn6Qv9ePz6Vy2yGHeB1XSD+8vjStf6j5GrqdJk4u0et4e0erEwVLba66wZoNbpWSQoEGNJHhvr012qRxdhQAy5jMACAJgxBgyIjyoK1ilWDlUAk7iTHWRzqxbrJpjTb5jmMxhuDKzctI6+MaenL5VFY3EsxCgSBt09BtU7axyW8ymA0nXSeURpmPOo7FXiTtqeojy0MGuamDoZNOq2hFh0gmFtsdDp4mYHj/tRCBdpJPUaD05x8KEuXGUkMeR0EjcbyfupWExaqpdtcpUeGs9OWlYlVG00zEm5vLTwBx7RVyrqQDIknUDSdPhRXaLu4W57cd5lXJmBPf5wORBPhypfA3zXFCrlILDQQ8xBGbc79aX26slbMgTDANrqJVxrJmJI36ClDMO+CiaObbzN+AX/AGd8aSGH1gCCy6gEcxuK1TB41bkj9Kui2ozMbVpLVu2OhPvEk6ADUmscxFwoQ/7jA/MT99an2ex5a0bdrEexZVa6wWxnLAQc2aZLQRoBMDSndOcpz0iOKnlwPHaQfFNbjOEuKrGV9pmLMOpZtydzG009wW7DEev40R2hwbrla5iPas2oVvaB1B5lHHcHgYqKwlzK6nx+3SqU27uqCY1sKuHIHLrw9Yf2svZcNfPW2y/xd376C7HWcuEteIZv4mJHyiu7eXP/AEj+Jtj/ADg/dRXBRlw9kdLVv/QKdjze08wR4/aaR2FuThwOhI+DED5AVY086pPYrilm3bdbl61bOfQO6qSInTMRVqXjOG/5mx/1bf40I3mMzqaHWSBrjQB47hP+Zsf9a3/5ULe7W4BJzY3DAj/5rc/AGomV4Zi20qmdr75NpxEDuz8RR2P+kPhqn/8AZDHlkS68+qIR86pXGfpKwt0mxatXGDsq52Cqo7w70EljB5EDapOxhFCqEdW5EQS3O9QlviVtb9xXYLBEEgn6o5jatU4a82vSsS4sJxF8wP2r/IxQNJ+8Nto8xfarqoKixvLtYGfVGV/7rA/Lf5V60gwRr0O9Uu0Y1B+Ov4U8nGLyjVsyjRQTMnwzCRHgR9tEGkw4zOj2621RfiWkv4EV57aqvc7QXAJKqfiPgf5mn7nHchi5bZfECdee8TUZTGdPtfDuPNb1EufZ1s14HoDUX24uf+ouj9zDT/Hetr9xp/sZiw92VJIKjlHM+PhQHbdov4nxtYdP87P/ANtUw4viReJu1qyupZTcSo8DE3Lp6W7h/wAsfaaRwhZxK+GvwBP3UrgrQL5/sEfF7f3TSOC/tnPRLn/1sB8yKecD6zzA4RVg9+fCrBhr8LEbgbx51XsMsue9ljw/nVmwzae+DoNwY+OtKsYR3pjnBA90NIUl0wCCOfLy8aWLx5kR6z9lNKGIAIUj+zH55fKmQoJjLHqftmhRa8JI8JJMJsk8wI7uoj95fCaY/Rx+QfxpWEMzpqBz89tfKu9of6s/L8asPSZfuMdvEmO/M/nxjlTmGt29Mxk8pkwBG43oK1d1IVgCNzHeET/PlRdm+gPei5HMtHwHnpUnoZCrfcGOPibZmFBeT7q+B6e7rFDY8uW1MgAAEnYAbaa0zxTFTlVYG2i7mQSTHTb5V5YuwIygE9SB61N+Eslt9o1+iTJLRpMCftNOYV8oyqq6wSWAadD10jU07k3DbnTTQefOl4dgklQMwiCQDHo8geYrF1NribqdfFeWvskMRcuAJPsxElQFQdQcoCnp9lG9s1NrA5DBYlFJBkAjUmY1900rs4mJuwze0KjYvIX/AAltI8qR9IzlcJIIIzLJEkQQQIOx1IpKwzVVFuMhz4tCPaY3xQ6HX8zV4+j/ABLsji2QLotuEOUFyU+ohPulgdTvC+tUTHMCDoZ05+NSPZfEFXdQSD7wI3kaGPlXogv5WbkZTDt+fk/9C2vTUTQLlmxbi3fUm7cRnuXCzFrTkE21gTLbZp/e6VXga9YzqfnSZoB3zcJ6SjRNMG5vf49uUc7Rr7bDi2GAJZCZnYb7UgY9giov1VCzzMCPSkPQ5rZsQ7cbTGngaStmtc9ZE8aOZlza+fpTTNChdABPXmB+HzpXFX/WDaIHXxod7oPU7dft6fCjaPlE8vj2viG9bRQI3EdB49T8vtpw7eQ/3phm57k/IU4TC+elbgQKBNiIby1/ChQ4kkb7jz6/GlXTrHOkXNtNK615W8+gOzN3PaHRlB9CJrHuOrkxWIUn/wB258yT94rTuwWJDYezGsIFM9Rp91VH6Q8H7LFFvZj9bFwXNZJACMm8aZVbr3jSvDHLVKxpiRmpgyu3rZFg3Mye9l9mT+sjKT7SIjJ9WZmeXMvYm3aa8R7ZltiYZ1lvcn3FaBL6aHQEHwqPvN9Vdzpvp6dKfuwS3MSTt5x91MrRbeR92dJ5xtTosZnYSBAO5iYgQOpjUDoD0pnEGCI0EbGvbLmZmPzrpXESLzRfo9w6rcyhgSFXSIJMd7TwI+/nUf8ASFYZMRcJ2uC0y+Sh1I+P2iq/hsYVghiCuswwOnMGBBETNXft8PaYCzcujLfVVYrzhsoZT6kH0NYUgKeIDc9IUxL0CvKZzw1ot3PGB85+6vOFtBunwI+JWk4L9mfP8a84f7r/AJ5/ypyBoIqJhfDbZJaCPUT9tWeykLqFOv1ekeFVnhcDUqTJ5E1YrTjLIB3560jxbXqtH+FX8lfaE37gO8jy1PPr50ywGkN6x504cRykesj7fxpn2ok6A79KwAvNsxUco5hm94zoARTXtPA/w2vwr0bNEKTpmM5RvqZmBQ0P/XYf4/yq/CZG7Em8QlvLroA3xPhXqhT4689uv5HhSr0KAGIURPOY6QBTV3EIBIDGNJnKPSJafDSpbTQTluRc3M5rxkCYMiKJdGa4x5SYJPKdIobEXCrALpI5bkz8adw2DYk8uZLHlqaqeR1l11FxYR5SzaSNAdduXPeafwzMsHMR8B89/nSLYVQe8ZIidvgOVDrB2BbvRJ5fnSqGoCCBNFQ3mgdm8QXMu0ifrMSSPASSdKZ7cWCuEtWs2aCqkkRmyrpGukkVXuH4u7aHdIB8Bt5Tp8qaxF1nOZ2Zm6sSft2HhS4Ic4bgOEPGAdm1NhIYcFVlh9NZ7v2Sf50XYwNu37qgHrufiaJBpDUV3rEWvpDqOCpUzmA15zmryvCa6qwueXG0obh7C+CyHug5ZjWYB0HTXc0STGtRXZ+57DFvYOiXdU6cyvyJXzAo3CU1Y+KKO1MTUpZQugPHjAeKiL7j90ga+Qn5zQ/kPkKVxNv/AFF6f6xv9R+4U2GG8j4ij7DhPKuxLEmOKKRcfSkKwO2vXfQU9bw/tHVOp18Bz/PlVhKWvIm+pDa6SAR5EAg/CnI0o7tLgmS8WI7jxlI20UDL4ERt0oC3tXCQwsbTW/o4xQayrbb/ACJX/t+dWLtlwYYnDtbEZx3rZPJhtryB2PgaoH0a8WVQbLDVZjxzHMJ6akj4davmP4h3sKwmHuPbbyNq40R1lF+FJ6iMtU+scU2V6Y9LTEsraz3eo2IPQz8K63eO3p8vnRfG7QXE3wuo9o5Hqc0fOhWOlNka4ih1sSIxixOX/F91P4SKGxbagcwJ/H8fSnMK21cZwln7KYO3cxC59SneVJgOw5N/ZHvnw67E/wCkvF57dgq2ZXFxsw2aCq5h0G4HhrzNVhSM2pI8Roeh28PlUmrYm8iW1FsiyuQF50XlEHXzjkKpTp/mhpq9YLRK2t1lesGLX58K7Be4fz1qfbsnecS91F8ETT7qew3ZQKpBuM3oBTVA1xppFZrU+cjODroIaNTyn76nFzfvKR4/gRSLHZ0LqC3lI/Civ6PIEFZE7UsqYF2ck2jal2lTVABeC30AjY9YP3A0KWymYPx/lRVzh/TMPnXljCHWWO0eHnBrL8JUXhNvx9Jhv8xOEcFGLhmAiY0JGux6/hQebD9L/wAF/wDKpJbBVSM4mdCEPx93rOppj2N3/mP8zfjWZov/AOTO75CfMILe94+E/bTWHUFhOveryuoVPMIwPkMkLjQV8Znx2p65ozHwUfACurq2fjB6PD0/mC2dd9dJpJuHryrq6hqnlELpfqn2k2KQ9dXVhPRiIqV7LYRLt9FuDMpOokifhXV1VbymZ4j9N/Qwnt7h0TFlUVVUIsBQAB73IVXq6uqKflEywf6C+kS9QXbDurYcaMM2vPSCPgda6uphg9z6QDtr9EeshbdwnUmSWJJ60UNq6upiNp5PjFNsKlezq95z/dHpJ0rq6pG02o+cR7tn+x/xr9jVU7FdXV3GdiPND+B3mXFWipIlWBjnoT9w+FaV2txTrhC6tDJiLbKdO6cw1HxPxr2uoTEfqCb4X9NpnHFcQz37zsZYuSTAHLoNKa6fnlXV1ErwgjeYwK/+1/h+wU7Z/Gurqkyo3hvT88qsnZBv1jeK/YRXV1aUfOJlif02luy92mhsa9rqbxBxnW0EbV4y17XVmd4VT2g91aYdB0rq6ukxgbGmK6urpqJ//9k=",
        titulo:"Bom dia&CIA",
        endereco:"Avenida das Comunicações",
        cidade:"Osasco",
        telefone:"(11) 3687-3000"
      },
      {
        imagem:"https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" ,
        titulo:"Cachorro frio do zé",
        endereco:"General Osório",
        cidade:"João Pessoa",
        telefone:"(83) 9 9999 9999"
      },
      {
        imagem:"https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png",
        titulo:"Restaurante Placeholder",
        endereco:"Rua das lamentações",
        cidade:"João Pessoa",
        telefone:"(83) 9 9999 9999"
      },
    ]; 
  }

}
