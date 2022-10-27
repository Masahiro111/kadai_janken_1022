let total_win = 0;
let total_drow = 0;
let total_lose = 0;
let total_winning_streak = 0;
let total_winning_streak_todays_max = 0;
let flag_winning_streak = 0;

function R_Click(p_janken_r) {
    let janken = ['グー', 'チョキ', 'パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor(Math.random() * 3);//Math.random() で乱数を作ります

    let p_janken = ['グー', 'チョキ', 'パー'];//"プレイヤーのjanken"のリストを作成します。
    //勝ち負けの判定機プログラムです
    if (janken_r === p_janken_r) {
        Result_end = "あいこです";
        flag_winning_streak = 0;
        total_winning_streak = 0;
        total_drow++;
    } else if (p_janken_r === 0 && janken_r === 1) {
        Result_end = "あなたの【勝ち】";
        total_win++;
        if (total_winning_streak == 0) {
            total_winning_streak = 1;
        }
        if (flag_winning_streak === 1) {
            total_winning_streak++;

            if (total_winning_streak >= total_winning_streak_todays_max) {
                total_winning_streak_todays_max = total_winning_streak;
            }
        }
        flag_winning_streak = 1;
    } else if (p_janken_r === 1 && janken_r === 2) {
        Result_end = "あなたの【勝ち】";
        total_win++;
        if (total_winning_streak == 0) {
            total_winning_streak = 1;
        }
        if (flag_winning_streak === 1) {
            total_winning_streak++;

            if (total_winning_streak >= total_winning_streak_todays_max) {
                total_winning_streak_todays_max = total_winning_streak;
            }
        }
        flag_winning_streak = 1;
    } else if (p_janken_r === 2 && janken_r === 0) {
        Result_end = "あなたの【勝ち】";
        total_win++;
        if (total_winning_streak == 0) {
            total_winning_streak = 1;
        }
        if (flag_winning_streak === 1) {
            total_winning_streak++;

            if (total_winning_streak >= total_winning_streak_todays_max) {
                total_winning_streak_todays_max = total_winning_streak;
            }
        }
        flag_winning_streak = 1;
    } else {
        Result_end = "あなたの【負け】";
        flag_winning_streak = 0;
        total_winning_streak = 0;
        total_lose++;
    }

    //結果を表示するためのプログラムです
    document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] + "を選択しました。ジャンケンの結果は・・・？";
    document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;

    document.getElementById("todays-grades")
        .innerHTML = "全&nbsp;" + (total_win + total_drow + total_lose) + "&nbsp;試合&nbsp;" + total_win + "勝&nbsp;" + total_lose + "敗&nbsp;" + total_drow + "分&nbsp;<br>連勝記録：" + total_winning_streak_todays_max + "連勝！";

}

function R_Click_2(p_janken_r) {
    let janken = ['グー', 'チョキ', 'パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor(Math.random() * 3);//Math.random() で乱数を作ります

    let p_janken = ['グー', 'チョキ', 'パー'];//"プレイヤーのjanken"のリストを作成します。
    //勝ち負けの判定機プログラムです
    if (janken_r === p_janken_r) {
        Result_end = "あいこです";
    } else if (p_janken_r === 0 && janken_r === 1) {
        Result_end = "あなたの【勝ち】";
    } else if (p_janken_r === 1 && janken_r === 2) {
        Result_end = "あなたの【勝ち】";
    } else if (p_janken_r === 2 && janken_r === 0) {
        Result_end = "あなたの【勝ち】";
    } else {
        Result_end = "あなたの【負け】";
    }

    //結果を表示するためのプログラムです
    document.getElementById("Rejan1_2").innerHTML = p_janken[p_janken_r] + "を選択しました。ジャンケンの結果は・・・？";
    document.getElementById("Rejan2_2").innerHTML = "相手は" + janken[janken_r] + Result_end;
}


function R_Click_3(p_janken_r) {
    let janken = ['グー', 'チョキ', 'パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor(Math.random() * 3);//Math.random() で乱数を作ります

    let p_janken = ['グー', 'チョキ', 'パー'];//"プレイヤーのjanken"のリストを作成します。
    //勝ち負けの判定機プログラムです
    if (janken_r === p_janken_r) {
        Result_end = "あいこです";
    } else if (p_janken_r === 0 && janken_r === 1) {
        Result_end = "あなたの【勝ち】";
    } else if (p_janken_r === 1 && janken_r === 2) {
        Result_end = "あなたの【勝ち】";
    } else if (p_janken_r === 2 && janken_r === 0) {
        Result_end = "あなたの【勝ち】";
    } else {
        Result_end = "あなたの【負け】";
    }

    //結果を表示するためのプログラムです
    document.getElementById("Rejan1_3").innerHTML = p_janken[p_janken_r] + "を選択しました。ジャンケンの結果は・・・？";
    document.getElementById("Rejan2_3").innerHTML = "相手は" + janken[janken_r] + Result_end;
}
