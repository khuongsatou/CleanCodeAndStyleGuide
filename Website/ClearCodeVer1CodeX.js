const userData=[
    {
        userId:1,
        userName: 'Anthony Johnson',
        memberSince: '08-01-2017',
        fluentIn: [
            'English',
            'Greek',
            'Russian'
        ]
    },{
        userId:2,
        userName:'Alice Stevens',
        memberSince:'02-11-2016',
        fluentIn:[
            'English',
            'French',
            'German'
        ]
    },{
        userId:3,
        userName:'Alice Stevens',
        memberSince:'02-11-2016',
        fluentIn:[
            'English',
            'French',
            'German'
        ]
    },{
        userId:4,
        userName:'Alice Stevens',
        memberSince:'02-11-2016',
        fluentIn:[
            'English',
            'French',
            'German'
        ]
    },
];

const firstName = "Tom";
const lastName = "Hanks";
const age = 31;
const lastNameLength = lastName.length;
const isComplete = false;
const isCurrentlyActive = true;
const songFileName = "Remember the name";
const yearsDoubled = ["1984", '1987', '1989', '1991'].map((year) => {
  return year * 2;
});


function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}


function doubleArray(array) {
  return array.map(number => number * 2)
}

class CarouselFeftArrow extends Componet{
    render() {
        return (
          <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={this.props.onClick}
          >
            <span className="fa fa-2x fa-angle-left" />
          </a>
        );
    }
}