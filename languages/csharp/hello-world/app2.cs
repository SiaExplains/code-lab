using System;


public class A
{
    public int a = 8;
    public int b = 9;
    public void display()
    {
        Console.WriteLine(a + " " + b);
    }
}

class Prog
{
    static void Main(string[] args)
    {
        A obj1 = new A();
        A obj2 = new A();

        obj1.a = 1;
        obj2 = obj1;
        obj2.b = 2;

        obj1.display();
        obj2.display();
    }
}