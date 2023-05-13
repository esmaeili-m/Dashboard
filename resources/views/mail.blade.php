<!DOCTYPE html>

<html>

<head>

    <title>ثبت نام</title>

</head>

<body>

<h1>{{ $data['title'] }}</h1>
<br>
<h1>{{ $data['arash'] }}</h1>

<p>{{ $data['body'] }}</p>



<p>موسسه گردشگری آفتاب شرق</p>
<br>
<p>ثبت نام جدید</p>
<br>
<p>نام : {{$data['name']}}</p>
<p>شماره همراه : {{$data['number']}}</p>
<p>دوره : {{$data['type']}}</p>
<p>مدرک : {{$data['madrak']}}</p>

</body>

</html>
