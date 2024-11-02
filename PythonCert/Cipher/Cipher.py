# main.py

# Define the text to decrypt and the custom encryption key
text = 'mrttaqrhknsw ih puggrur'  # `text` is the encrypted message that we aim to decode
custom_key = 'python'  # `custom_key` is the key used for encryption/decryption, following the Vigenère cipher principle

def vigenere(message, key, direction=1):
    """
    Function to encrypt or decrypt a message using the Vigenère cipher.
    
    Args:
    - message (str): The text to encode or decode.
    - key (str): The encryption/decryption key.
    - direction (int): Determines if we're encrypting (1) or decrypting (-1).
    
    Returns:
    - str: The transformed message after encryption or decryption.
    """

    # Initialize `key_index` to track which character in the key corresponds to each letter in `message`
    key_index = 0
    # Define `alphabet` to represent all letters available for the cipher
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    # Initialize `final_message` as an empty string to store the output text after transformation
    final_message = ''

    # Loop through each character in `message`, converting to lowercase to match `alphabet`
    for char in message.lower():
        # If the character is not a letter (e.g., space), add it unchanged to `final_message`
        if not char.isalpha():
            final_message += char
        else:        
            # Select the corresponding character from `key` using modulus to wrap around as needed
            key_char = key[key_index % len(key)]
            key_index += 1  # Move to the next character in `key` for the next loop iteration

            # `offset` is the numeric position of `key_char` in `alphabet`, defining how much to shift `char`
            offset = alphabet.index(key_char)
            # `index` finds the position of `char` in `alphabet`, setting the baseline position for transformation
            index = alphabet.find(char)
            # Calculate `new_index` as the shifted position of `index` by `offset`, using `direction` for direction
            new_index = (index + offset * direction) % len(alphabet)
            # Append the transformed character from `alphabet` at `new_index` to `final_message`
            final_message += alphabet[new_index]
    
    return final_message  # Return the complete transformed text (encrypted or decrypted)

def encrypt(message, key):
    """
    Encrypts `message` using the Vigenère cipher.
    
    Args:
    - message (str): The text to encrypt.
    - key (str): The encryption key.
    
    Returns:
    - str: The encrypted text.
    """
    # Calls `vigenere` with `direction=1`, which by default initiates the encryption process
    return vigenere(message, key)  
    
def decrypt(message, key):
    """
    Decrypts `message` using the Vigenère cipher.
    
    Args:
    - message (str): The encrypted text to decrypt.
    - key (str): The decryption key (same as the encryption key).
    
    Returns:
    - str: The decrypted text.
    """
    # Calls `vigenere` with `direction=-1`, indicating decryption mode in the Vigenère cipher
    return vigenere(message, key, -1)  

# Display the original encrypted message
print(f'\nEncrypted text: {text}')  # Outputs the encrypted `text` for reference before decryption
print(f'Key: {custom_key}')  # Outputs `custom_key` to show the key being used

# Decrypt `text` using `decrypt` and display the resulting decoded message
decryption = decrypt(text, custom_key)  # `decryption` holds the result of decrypting `text` with `custom_key`
print(f'\nDecrypted text: {decryption}\n')  # Prints the decrypted text as the final readable output


# --- Additional Notes on Key Python and Vigenère Cipher Concepts Used in the Code ---

# String Slicing and Indexing: `message.lower()` converts the text to lowercase to match `alphabet` for consistent indexing.
# List-Like Operations: `alphabet` acts as a lookup table where each letter has a fixed position, helping map characters for shifting.
# Modulus for Looping Through the Key: `key_index % len(key)` allows cycling through `key` continuously, aligning key and message lengths.
# Encryption and Decryption Direction: `direction` determines whether offsets are added or subtracted, switching between encryption (1) and decryption (-1).
# Character Translation with ASCII: The Vigenère cipher transforms characters based on ASCII, allowing different letters to match precisely through `alphabet`.
