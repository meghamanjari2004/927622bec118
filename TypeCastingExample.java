public public class TypeCastingExample {
    public static void main(String[] args) {
        double originalDouble = 9.75;
        int castedInt = (int) originalDouble;  // narrowing (explicit)
        System.out.println("\nType Casting:");
        System.out.println("Original double: " + originalDouble);
        System.out.println("Casted to int: " + castedInt);

        int originalInt = 42;
        double castedDouble = originalInt;  // widening (implicit)
        System.out.println("Original int: " + originalInt);
        System.out.println("Casted to double: " + castedDouble);
    }
}
 {
    
}
