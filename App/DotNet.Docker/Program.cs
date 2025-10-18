if (args.Length is 0)
{
    Console.WriteLine("아규먼트가 없습니다.");
    return;
}
var counter = 0;
var max = args.Length is not 0 ? Convert.ToInt32(args[0]) : -1;

while (max is -1 || counter < max)
{
    Console.WriteLine($"Conter: {++counter}");
    await Task.Delay(1000);
}
