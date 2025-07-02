ffmpeg -i О_важности_индивидуального_подхода.mp4 -c:v h264 -crf 28 -c:a copy week1_lesson1.mp4
ffmpeg -i Связь_со_спортом_медициной_и_инженерией.mp4 -c:v h264 -crf 28 -c:a copy week1_lesson2.mp4


Тамбнейлы
# Попробовать разные моменты (3, 7, 10 секунд)
ffmpeg -i week1_lesson1.mp4 -ss 00:00:03 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_3s.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:07 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_7s.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:10 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_10s.jpg