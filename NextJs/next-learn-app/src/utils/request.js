const data = [
    {
        "title": "lixcglbvomu",
        "price": 49.89,
        "date": "2012-02-01 11:01:33",
        "id": "20436535",
        "desc": "iwcsjodwopxetkgjwgrivwnbpewaqynpqhcsmmgnbowvnqrpysihzxvypohccrxdvvnqjhiumgpuystjofhlfqbrrdwkgboypmxedyjwwpqtncuswjrleoygjsvbveksimrxyjjxohzlphpiuuaskdyazulxpnomjokhysmsmbhbvkw"
    },
    {
        "title": "uujsgldpawxbbyx",
        "price": 49.97,
        "date": "1972-05-22 15:37:15",
        "id": "22888474",
        "desc": "gfwdjwksnvohwndjmxebohgnribspcdjqpogmmfdlzihnznkdfpkkdwceujeojrimtmvsoufqxghsjxxdxmohpgcdgslhhdqgehzfabmvgslpw"
    },
    {
        "title": "shqohqpbbhbfii",
        "price": 39.65,
        "date": "2002-03-05 08:27:42",
        "id": "33245456",
        "desc": "kfmlydpsfkhptlcsjjmlceabvqxrxmcxsfkxvwlzttxfmestdsmcumsmsdtgmwbybopfgvjncbrngjvhocyjlpljgwbqyfrcibcxrrslviqvfjdlomciesyqvxatbgioykgqjjlyhgesfhanbmsyyuqpxsgiexqddpzslinjyqspinsdn"
    },
    {
        "title": "wbboslpfrvhbhs",
        "price": 23.16,
        "date": "2020-10-05 19:12:46",
        "id": "77518028",
        "desc": "vetoemhesndhdwdlcmpnqkcvownrdlnrucuofjslamypnlfepboobfeenurrycdcuhsgsepjlpphgxjhdwybnpvpgxviyuvpmptilypuvzcmmvveccbzfnijgdrwdfxwdnturrvxblfelocncubqkfwghahk"
    },
    {
        "title": "giuenhvcnfiygyqs",
        "price": 40.93,
        "date": "1977-12-14 15:40:12",
        "id": "01766569",
        "desc": "mllodtpkkiyqoxwqbpanfolvqcvmtzufhmgiwimpuouqsvbfdqvmlpsjxbaoemyajtmsarkjviagropfcbcrdsawlnhmlprqlifloo"
    },
    {
        "title": "stqyhibpsbjj",
        "price": 95.24,
        "date": "2004-08-18 19:10:30",
        "id": "74022146",
        "desc": "hrnrvwqylmctmgvegdjnkqrblggpsljxywyqjduclvqvryfbuqeksaslxtbubibtxfhplfsdghgebxgvqohxflmyusvkldbmsefwxjgeokupemkwvmqfgcanutfssjkz"
    },
    {
        "title": "ijfmiqojrgoxmemrre",
        "price": 78.68,
        "date": "2007-01-18 06:26:47",
        "id": "26427429",
        "desc": "nbwthyvadyehweslledjvplwxhpikxkmlxjvllxxpvwaiavfobhvyscahxjnouxjfqsyhmfqomkghqqtmchjhblcmptvutlxkipfgoekcpsvyutvepjepjalcgtcghtkpdmolscuxltcblrvtgglfmvcqviwshsfsdnokoxw"
    },
    {
        "title": "ejbrgfqzwvwn",
        "price": 67.44,
        "date": "1983-05-04 13:25:17",
        "id": "62621111",
        "desc": "uulrkxtgnnesaaalervizcnkwgqsxscdrxbhwhcgwrgewhxruvudpwszirfmtbrhpkqblotsvgbjovrywblyrlxljmmngmmplqqmbetjogqcuhmokeumbirgszqgfkeowyapuiedtkvrmexapjgkheahprfk"
    },
    {
        "title": "sgmwipyylxyfqq",
        "price": 58.39,
        "date": "1994-02-22 13:34:56",
        "id": "76361675",
        "desc": "noxyiqrjutcxllafdwrphgelikkkiplagajktqlszvfhcwutciytwpmgiosrnjoozlbyisvdtgrlwmvgchpstvchrnubvsmdrxdwvbnqijeigfiiwrpdzliwwjxfmjiefjmsldsftwywsdbrsgqwbrwrgnqwtjtanuvidzyypgubvwlyuloj"
    },
    {
        "title": "qfsctnsoqelty",
        "price": 47.85,
        "date": "1979-11-04 12:14:51",
        "id": "65264427",
        "desc": "sbnuymrtazdghqqyagdqrdtpcmgregtkypynuibhegqzkjvkenupunlcdvclnmgxltoinlepvmkeoiuyhioenpvwrmfcifytphbtdanmtuh"
    }
]

export default function request(nowData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(nowData)
        }, 3000);
    })
}
export const getAllData = () => request(data)
export const getProductById = (id) => request(data.find(v => v.id === id))