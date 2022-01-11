export class G964 {
    public static longest = (s1, s2) => {
      const merged = [...new Set(`${s1}${s2}`)].sort();

      return merged.join('');
    }
  }