var str = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
];
var movieTitles=[];
var pictureTitles=[];

var movie = [
    "mov",
    "avi",
    "mpeg",
    "mp4",
    "mpg"
]
var pictures = [
    "png",
    "jpg",
    "jpeg",
    "gif"
]

sort()

function sort() {
    for (var i = 0; i < str.length; i++) {
        var newString = str[i].split(".");
        if (movie.includes(newString[newString.length-1])){
            movieTitles.push(newString[0])
        }
        if (picture.includes(newString[newString.length-1])){
            pictureTitles.push(newString[0])
        }
    } 
    console.log(pictureTitles)
    console.log(movieTitles)
}

